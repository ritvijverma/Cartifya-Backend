import JWT  from 'jsonwebtoken'
import userModel   from "../models/user.model.js"
import redis from '../config/redis.js'
//Protected Routes  token  base
export const requireSignIn = async (req,res, next) =>{
    try{
                const authHeader = req.headers.authorization || "";
                const token = authHeader.startsWith("Bearer ")
                    ? authHeader.split(" ")[1]
                    : authHeader;
                if (!token) {
                    return res.status(401).send({ success: false, message: "No token provided" });
                }

      const isBlacklisted = await redis.get(`blacklist:${token}`);
      if(isBlacklisted){
        return res.status(401).send({
            success :false,
            message: "Session Expired, please login again"
        })
      }



                const decode = JWT.verify(token, process.env.JWT_SECRET);
                req.user = decode;
                next();

    }catch(error){
                console.log(error);
                return res.status(401).send({ success: false, message: "Invalid or expired token", error });
    }
}

//Admin Access

export const isAdmin =  async(req, res, next) =>{
    try{
        const user = await userModel.findById(req.user._id)
        if(user.role !==1){
            return res.status(401).send({
                success:false,
                message:"Unauthorized Access",
            });

        }else{
            next();
        }

    }catch(error){
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:"Error in Admin Middleware"

    })
    }
}