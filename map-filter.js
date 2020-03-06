const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);


// function square(element){
//     return element * element;
// }
// alternative way to declear function (it's call is Arrow function)
// const square = element => element * element;
const square = x => x *x;

const result = numbers.map(function(x){
    return x * x;
});

const result2 = numbers.map( x => x * x );

const maxNumber = numbers.filter(x => x < 5);

// console.log(result);
console.log(maxNumber);