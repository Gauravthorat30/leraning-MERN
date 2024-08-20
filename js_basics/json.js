//console.clear();
let str = `{"name" : "gaurav" , "gender" : "male" , "age" : 21}`;
console.log(str);

const obj = JSON.parse(str);
console.log(obj["name"])
console.log(typeof obj)

let obj1 = {
    name : "harkirat",
    gender : "male",
    age : 28
}

const str1 = JSON.stringify(obj1);
console.log(str1);
console.log(typeof str1)