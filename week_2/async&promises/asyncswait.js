function gaurav(){
    let p = new Promise(function(resolve){
        setTimeout(() => {
            console.log("4")
            resolve("5");
        }, 1000);
        console.log("1")
    })
    console.log("2")
    return p;
}

async function  main(){ 
    const ans = await gaurav();
    console.log(ans)
}

main();
console.log("3")