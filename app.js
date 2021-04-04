var express=require('express')
var app=express()
app.get('/',(req,res)=>{
res.send("welcome to eira")
})
app.get('/home',(req,res)=>{
    res.send("welcome to the world of henna designs")
    })
    app.get('/service',(req,res)=>{
        res.send("mehandi designs,Natural henna cones,Haldi henna,Engagement henna")
        })
        app.get('/contact us',(req,res)=>{
            res.send("Eira henna studio,sarovaram building,karumady po,alappuzha,phn:8086949416")
            })
app.listen(3000,()=>{
console.log("server started at http://localhost:3000/")
})