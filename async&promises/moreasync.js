function gaurav(){
    let p = new Promise(function(resolve){

        // setTimeout(function(){
        //     resolve("hiiithere")
        // }, 3000)
        let a = 0;
        for(let i = 0 ; i <= 10000000000 ; i++){
            a += i;
        }

        resolve(a);


    })
    console.log("bye");
    return p;
}


async function main(){
    let ans = await gaurav();
    console.log(ans)
}

main();
// let a1 = 0;
// for(let i1 = 0 ; i1 <= 10000000000 ; i1++){
//     a1 += i1;
// }
console.log("hiii")