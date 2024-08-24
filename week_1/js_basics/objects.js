let obj = {
    name : "gaurav",
    gender : "male",
    age : 21
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.assign({} , obj , {married : "true"}))
console.log(obj.hasOwnProperty("name"));
console.log(Object.entries(obj))

