import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env. CLOUDINARY_CLOUD_SECRET,
});

const uploadOnCloudinary=async (localFilePath)=>{
  try{
    if(!localfilePath) return null
    //upload the file on cloudinary
    cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"
    })
    //file has been uploaded successfull
    console.log("file is uploaded on cloudinary",
      Response.url);
      return Response;

  }catch(error){
    fs.unlinkSync(localFilePath)//remove the locally saved temprory file as the upload operation got failed

  }
}

export {uploadOnCloudinary}

