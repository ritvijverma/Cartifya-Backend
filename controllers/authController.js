import { comparePassword, hashPassword } from "../helpers/authHelper.js";

import userModel from "../models/user.model.js";
import JWT from "jsonwebtoken";
import redis from "../config/redis.js"

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address ,answer} = req.body;

    //validation
    if (!name) return res.send({ message: "Name is required" });
    if (!email) return res.send({ message: "Email is required" });
    if (!password) return res.send({ message: "Password is required" });
    if (!phone) return res.send({ message: "Phone is required" });
    if (!address) return res.send({ message: "Address is required" });
    if (!answer) return res.send({ message: "Answer is required" });

    //existing user
    const existingUser = await userModel.findOne({ email });
    //existing user
    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "Already Register Please Login ",
      });
    }
    // register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "user registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errors in Registration",
      error,
    });
  }
};

// //POST || LOGIN

export const loginController = async (req,res) => {
  try {

    const {email,password}  = req.body
    //validation 
    if(!email || !password){
      return res.status(404).send({
        success: false,
        message:"Inavlid Email & password"
      })
    }

    //check user
    const user = await userModel.findOne({email})
    if(!user){
      return res.status(404).send({
        success:false,
        message:"Email is not registerd"
      })

    }
const match = await comparePassword (password,user.password)
if(!match){
  return res.status(404).send({
    success:false,
    message:'Invalid Password'
  })
}

//token 
const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {
  expiresIn:"24h"
});
res.status(200).send({
  success:"true",
  message:"Login Successfully",
  user:{
    name:user.name,
    email:user.email,
    phone:user.phone,
    address:user.address,
    role:user.role,
  },
  token
});

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};


//test controller 
export const testController = (req,res) =>{
  res.send("Protected Routes")
}

//forgot controller

export const forgotPasswordController = async (req,res) => {
  try{
    const {email , answer, newPassword} =req.body
        if (!email) return res.status(400).send({ message: "Email is required" });
        if (!answer) return res.status(400).send({ message: "Answer is required" });
        if (!newPassword) return res.status(400).send({ message: "New Password is required" });

        //check
const user = await userModel.findOne({email,answer})
//validation 
if(!user){
  return res.status(404).send({
    success:false,
    message:'Wrong Email or Answer'
  })
}
const hashed = await hashPassword(newPassword)
await userModel.findByIdAndUpdate(user._id,{password:hashed});
res.status(200).send({
  success:true,
  message:"Password Reset Succuessfully",
});


  }catch(error){
    console.log(error);
    res.status(500).send({
      success: false,
      message:'Something Went Wrong',
      error
    })
  }

}

// update profile for user 
export const updateProfileContainer = async(req, res) =>{
  try {
    const { name, email, password, address, phone } = req.body;
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    // password validation: optional, but if provided must be >= 6
    if (password && password.length < 6) {
      return res.status(400).send({ success: false, message: "Password must be at least 6 characters" });
    }

    const hashedPassword = password ? await hashPassword(password) : undefined;

    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        address: address || user.address,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Profile Updated Successfully",
      updatedUser,
    });

  }
  catch(error){
    console.log(error)
    res.status(400).send({
      success:false,
      message:"Error While Updating Profile",
      error
    })

  }
}


//LOGOUT CONTROLLER 
// export const  logOutController = async(req,res) =>{
//   const token = req.cookies.token
//   if(token){
//     await redis.set(`blacklist:${token}`,'true', 'EX', "24 * 60 * 60")
//   }
//   res.clearCookie('token',{
//     httpOnly: true,
//     secure: true,
//   })
//   return res.status(200).json({message: "Logout Successfully"})
// }


export const logOutController = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ success: false, message: "No token provided" });
    }

    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

    if(token){
        await redis.set(`blacklist:${token}`, 'true', 'EX', 86400); 
    }
    
    res.status(200).send({ success: true, message: "Logout Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in Logout API", error });
  }
};
