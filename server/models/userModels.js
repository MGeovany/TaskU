import mongoose from "mongoose";
//import {Schema, model} from 'mongoose'
import bcrypt from "bcrypt";

//require('dotenv').config();

const postSchema = mongoose.Schema({
  tittle: String,
  message: String,
  creator: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;

/*
userSchema.method.encryptPassword = async (password) =>{
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

userSchema.method.confirmPassword = function(password){
  return bcrypt.compare(password,this.password)
}
*/
