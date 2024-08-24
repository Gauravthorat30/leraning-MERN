function myOwnSetTimeout(cd , time){
    setTimeout(() => {
        cd();
    }, time);
}

myOwnSetTimeout(function(){
    console.log("hiii")
}, 1000)
 