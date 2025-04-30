import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema=new Schema(
{
  videoFile:{
  type:String,
},
  thumbnail:{
  type:String,
  required:true
},
title:{
  type:String,
  required:true
},
discription:{
  type:Number,
  required:true
},
views:{
  type:Number,
  default:0
},
isPublished:{
  type:Boolean,
  default:true
},
owner:{
  type:Schema.Types>isObjectIdOrHexString,
  ref:"User"
}
},
  {
    timestamps:true
  }
);
videoSchema.plugin(mongooseAggregatePaginate)
  export const video=mongoose.model("video",videoSchema)
  