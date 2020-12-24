const express=require('express')
const User = require('../model/user')
const router=express.Router()
const jwt = require('jsonwebtoken')
const config= require('../config')


router.post('/login',function(req,res) {
  const {email,password}=req.body

  if(!email){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill email!'}]})
  }
  if(!password){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill password!'}]})
  }

  User.findOne({email},function(err,foundUser) {
    if(err){
      return res.status(422).send({errors:[{title:'User error',detail:'Something went wrong!'}]})　//間違っていた時
    }
    if(!foundUser){//重複エラー //見つからないといけないのでエラー
      return res.status(422).send({errors:[{title:'User error',detail:'User is not exist!'}]})　//すでに使用されていた時
  }
    if(!foundUser.hasSamePassword(password)){
    return res.status(422).send({errors:[{title:'User error',detail:'Incorrect password!'}]})　//すでに使用されていた時
  }

   const token=jwt.sign({
    userId:foundUser.id,
    username: foundUser.username
  }, config.SECRET, { expiresIn: '1h' })

   return res.json(token)

})
})

router.post('/register',function(req,res) {
  const {username,email,password,confirmPassword}=req.body

  // 上と下は同じ意味
  // const username=req.body.username
  // const email=req.body.email
  // const password=req.body.password
  // const confirmPassword=req.body.confirmPassword

  if(!username){
   return res.status(422).send({errors:[{title:'User error',detail:'Please fill username!'}]}) //invail error の部分はエラーハンドラに変更
  }
  if(!email){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill email!'}]})
  }
  if(!password){
    return res.status(422).send({errors:[{title:'User error',detail:'Please fill password!'}]})
  }
  if(password !==confirmPassword){
    return res.status(422).send({errors:[{title:'User error',detail:'Please check password!'}]})
   }

  User.findOne({email},function(err,foundUser) {//emailが1つ見つかったら探すのを止める
    if(err){
      return res.status(422).send({errors:[{title:'User error',detail:'Something went wrong!'}]})　//間違っていた時
    }
    if(foundUser){//重複エラー
      return res.status(422).send({errors:[{title:'User error',detail:'User already Password!'}]})　//すでに使用されていた時
    }
     const user =new User({username,email,password})
       user.save(function(err){
         if(err){
          return res.status(422).send({errors:[{title:'User error',detail:'Something went wrong!'}]})
         }

         return res.json({"registerd":true}) 
         }
       )
    })
})

module.exports=router