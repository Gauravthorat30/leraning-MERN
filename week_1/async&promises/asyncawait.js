function pms(){
    console.log("hiiiii")
    let p = new Promise(function(resolve){
        console.log("hiiiiiii")
         
        resolve("hiii there");
    })
    console.log("hiiiiiiiii")
    return p;
    console.log("hiiiiiiiii")
}


async function main(){
    console.log("hiii")
    let ans = await pms();
    console.log(ans)
}
console.log("hi")
main();
console.log("after main")