var express = require("express");

var app = express();

app.get("/",function(req,res){
    res.send("Hello,world");
})

var port = process.env.PORT
app.listen(port,function(){
    console.log("Server started!")
})
