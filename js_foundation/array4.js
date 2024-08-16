//Write a program that reverses all the elements of an array

// let arr = [1 , 2 , 3 , 4 , 5];
// let newArr = []
// for(let i = 0 ; i < arr.length ; i++){
//     newArr[i] = arr[arr.length - i - 1];
// }

// console.log(newArr);

let arr = [1 , 2 , 3 , 4 , 5];
for(let i = 0 ; i < arr.length ; i++){
    let a = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = a;

}

console.log(arr);


