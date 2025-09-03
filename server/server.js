
const express=require("express");
const cors=require("cors");
require("dotenv").config();
const multer=require("multer");

const Port=process.env.PORT ||4000

app.listen(Port,()=>{
   console.log(`server running on port ${Port}`);
})