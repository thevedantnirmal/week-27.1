import { PrismaClient } from '@prisma/client'
import express from 'express'
const app=express()
const prismaClient=new PrismaClient()
app.get('/',async(req,res)=>{
    await prismaClient.user.findMany()
    res.json({
        "message":"Get Endpoint"
    })

})
app.post("/",async(req,res)=>{
   await prismaClient.user.create({
    data:{
        username:Math.random().toString(),
        password:Math.random.toString()
    }

   })

   res.json({
    "message":"Post Endpoint"
   })
})
app.listen(3000)