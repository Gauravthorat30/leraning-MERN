//Write a program that prints all the male people’s first name given a complex object 

 let complexObj = [{
    name : "gaurav",
    gender : "famale"
 },
 {
    name : "ram",
    gender : "male" 
 },
 {
    name : "krishna",
    gender : "male" 
 }
]

for(let i = 0 ; i < complexObj.length ; i++){
    if(complexObj[i]["gender"] == "male"){
        console.log(complexObj[i]["name"]);
    }
}