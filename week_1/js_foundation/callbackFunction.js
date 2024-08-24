function sum(a , b , callBack){
    let ans = a + b;
    callBack(ans);
}

function first(ans){
    console.log("first function " + ans);
}

function second(ans){
    console.log("second function " + ans);
}

sum(10 , 20 , second);