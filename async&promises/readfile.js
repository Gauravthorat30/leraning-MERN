const read = require("fs");

read.readFile("a.txt" , "utf-8" , function(err , data){
    console.log(data);
})