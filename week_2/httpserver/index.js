const express = require("express");
const bodyParser = require("body-parser"); 
const port = 3000;
const app = express();
app.use(bodyParser.json());

// app.get("/asd" , function(req , res){
//     res.send("hello world")
//     console.log(req.headers)
//     const data = req.headers
//     res.send(data);
// })

// app.post("/conversation" , function(req , res){

//     console.log(req.headers["authorization"])
//     res.send({
//         name : "gaurav",
//         age : 18
//     });
// })


app.post("/" , function(req , res){
    
    console.log(req.body);
    console.log("hiii")
    res.send(req.body)
})



app.listen(port , function(){
    console.log("port started")
});