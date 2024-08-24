// let currrentTime = performance.now();
// console.log(currrentTime)

// let b = 0;
// for(let i = 0 ; i <= 10000000000 ; i++){
    
//     b += i;
    
// }
// console.log(b);

// let afterTimer = (performance.now()) / 1000;
// console.log(afterTimer)



let codeStartTime = performance.now();
console.log(codeStartTime);

const startTime = performance.now();

setTimeout(() => {
    const endTime = performance.now();
    const ans = endTime - startTime - 1000;
    console.log(ans);
}, 1000);


