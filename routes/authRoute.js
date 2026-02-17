import express from "express";
import { registerController, loginController, testController, forgotPasswordController, updateProfileContainer, logOutController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


//routing object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register',registerController)

//LOGIN || METHOD POST 
router.post('/login', loginController)

//LOGOUT CONTROLLER || METHOD GET
router.post('/logout', requireSignIn, logOutController)

//FORGOT PASSWORD
router.post('/forgot-password', forgotPasswordController)

//Test
router.get('/test',requireSignIn,isAdmin,testController)

//protected user-routes
router.get('/user-auth', requireSignIn, (req,res) =>{
    res.status(200).send({ok:true});
});

//protected admin routes
router.get('/admin-auth', requireSignIn,isAdmin, (req,res) =>{
    res.status(200).send({ok:true});
});

//update user profile
router.put("/update-profile", requireSignIn, updateProfileContainer)

export default router;