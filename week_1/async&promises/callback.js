function gaurav(fn){
    fn();
}

function main(){
    gaurav(function(){
        console.log("hiii there");
    })
}

main();