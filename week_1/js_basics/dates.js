const mydate = new Date();
console.log(mydate);
mydate.setHours(23);
console.log(mydate.getHours())


mydate.setTime(10000)
console.log(mydate.getTime())


let calculate = new Date();

let beforeExecution = calculate.getTime();
let a = 0;
console.log(beforeExecution);
for(let i = 0 ; i <= 10000000000 ; i++){
    a += i;
}
console.log(a);
let calculate1 = new Date();
let afterExecution = calculate1.getTime();

console.log(afterExecution);

const ans = afterExecution - beforeExecution;
console.log(ans);