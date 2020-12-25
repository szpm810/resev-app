const mongoose =require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt') 
 
const UserSchema = new Schema({
  username:{
      type: String,
      required:true,
      max:[60,'ユーザー名は最大文字数は60です。'] 
    },
  email:{
      type: String,
      required:true,
      lowercase:true,
      unique:true,
      max:[60,'Eメールは最大文字数は60です。'] },
  password:{
      type: String,
      required:true,
      min:[6,'6文字以上で入力してください。'] ,
      max:[60,'最大文字数は60です。']
    },
})

UserSchema.methods.hasSamePassword=function(inputPassword){
  const user=this
  return bcrypt.compareSync(inputPassword,user.password)
}


UserSchema.pre('save',function(next){
  const user=this
  const saltRounds = 10

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
        // Store hash in your password DB.
        user.password=hash
        next()
    });
});
})

module.exports = mongoose.model('User',UserSchema)