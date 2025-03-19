const express = require("express");
const app =  express();

app.listen(3000, ()=>{
    console.log("APP successfully");
})
app.get('/',(req,res)=>{
    res.send(`<h1> THis is  my homepage </h1>`)
})