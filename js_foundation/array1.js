//Write a program prints all the even numbers in an array 
let age = [20 , 21 , 22 , 23 , 24 , 25];

for(let i = 0 ; i < age.length ; i++){
    if(age[i] % 2 == 0){
        console.log(age[i] + " even age");
    }
}