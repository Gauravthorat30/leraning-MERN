let time = 30;

function hi(){
setTimeout(function timer(){
    console.log(time);
    time--;
    
    if(time == -1){
        return;
    }
    hi();
    
    } , 1000);
}

hi()
