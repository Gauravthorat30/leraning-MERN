function square(a){
    return a * a;
}

function qube(b){
    return b * b * b;
}

function main(a , b , fn){

    const sq = fn(a);
    const qb = fn(b);
    const ans = sq + qb;
    return ans;

}

console.log(main(2 , 1 , qube)); 