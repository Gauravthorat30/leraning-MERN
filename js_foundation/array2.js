//Write a program to print the biggest number in an arrya
let numbers = [100 , 10 , 50 , 200];
let biggestNumber = numbers[0];
for(let i = 0 ; i < numbers.length ; i++){
    if(biggestNumber < numbers[i]){
        biggestNumber = numbers[i];
    }
}
console.log(biggestNumber);
