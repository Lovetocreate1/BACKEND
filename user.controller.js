import { asyncHandler } from "../utils/asyncHandler";

const registerUser=asyncHandler(async(req,res)=>{
 //get details from frontend
 //validation-not empty
 //check if user already exists:username,email
//check for images,check for avatar
//upload them cloudinary,check avatar
//create user object-create entry in db
//remove password and refresh token field from respomse
//return resource


const {fullName,email,username,password}=req.body
console.log("email:",email);













})


export {registerUser} 