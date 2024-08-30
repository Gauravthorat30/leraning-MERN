const express = require("express");
const app = express();

function sum(a , b){
    const ans = a + b;
    return ans;
}

app.get("/" , function(req , res){
    const input1 = req.query.a;
    const input2 = req.query.b;
    const convert1 = parseInt(input1);
    const convert2 = parseInt(input2);
    const ans = sum(convert1 , convert2);
    res.send(ans.toString());

})

app.listen(3000);