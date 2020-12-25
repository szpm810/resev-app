const express=require('express')
const mongoose = require('mongoose')
const mongoose= require('mongoose')
const bodyParser = require('body-parser')
const config= require('./config/dev')
const FakeDb =require('./fake-db')

const productRoutes =require('./routes/products')
const path =require('path')
const userRoutes =require('./routes/users')
const path =require('path')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
    () => {
        const fakeDb =new FakeDb()
        fakeDb.pushProductsToDb()
    }
)

const app=express()

app.use('/api/v1/products',productRoutes)
  useCreateIndex:true
}).then(
    () => {
        if (process.env.NODE_ENV!=='production'){
        const fakeDb =new FakeDb()
       //fakeDb.pushProductsToDb()
    }
}
)

const app=express()
app.use(bodyParser.json())

app.use('/api/v1/products',productRoutes)
app.use('/api/v1/users',userRoutes )


if (process.env.NODE_ENV==='production'){
const appPath=path.join(__dirname, '..','dist','resev-app')
 app.use(express.static(appPath))
 app.get("*",function(req,res) {
     res.sendFile(path.resolve(appPath,'index.html'))
 })
}

const appPath=path.join(__dirname, '..','dist','resev-app')
 app.use(express.static(appPath))
 app.get("*",function(req,res) {
     res.sendFile(path.resolve(appPath,'index.html'))
 })

const PORT = process.env.PORT || '3001'

app.listen(PORT,function(){
    console.log('I am running!')
})
