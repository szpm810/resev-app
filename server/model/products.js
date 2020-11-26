//modelの作り方
const mongoose =require('mongoose')
const Schema = mongoose.Schema
//const ObjectId=Schema.ObjectId
 
const productSchema = new Schema({
 // author: ObjectId,
  coverimage: String,
  name:{type: String, required:true,max:[60,'最大文字数は60です。'] },
  //type・required(入力必須)・文字数指定
  coverimage:String,
  name: String,
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingtext1: String,
  headingtext2: String,
  headingtext3: String,
})

module.exports = mongoose.model('product',productSchema)








/*
//modelの作り方
const mongoose =require('mongoose')
const Schema = mongoose.Schema
//const ObjectId=Schema.ObjectId
 
const productSchema = new Schema({
 // author: ObjectId,
  coverimage: String,
  name:{type: String, required:true,max:[60,'最大文字数は60です。'] },
  //type・required(入力必須)・文字数指定
  coverimage:String,
  name: String,
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingtext1: String,
  headingtext2: String,
  headingtext3: String,
})

module.exports = mongoose.model('product',productSchema)
*/
