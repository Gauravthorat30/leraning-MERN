function gaurav(){
    console.log("1")
    let p = new Promise(function(resolve){
        console.log("2")
        resolve("hiiii there");
    })
    console.log("3")
    return p;
}

function main(){
    console.log("f");
    gaurav().then(function(val){
        console.log(val)
    })
   console.log("hi");
}

main();
console.log("hiiiii")