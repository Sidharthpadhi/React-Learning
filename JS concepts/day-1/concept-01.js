// Functions

// Normal function
// function sum(a,b){
    // logic
//     return a + b;
// }

// const sum = (a,b) => {
//     return a + b;
// }

// console.log(sum(10,20));
// console.log(mul());

// function sayHello(){
//     return "Hello";
// }

// const sayHello = () => {
//     return "Hello";
// }

// Normal Function
function add(a,b){
    return a + b;
}

// Function expression
const result = function add(a,b){
    return a + b;
}

// Arrow Function
const data = (a,b) => {
    return a + b;
}

console.log(add(10,20));
console.log(result(10,20));
console.log(data(10,20));

// If using normal function and want to export in any other file:-

export default function add(a,b){
    return a + b;
}
// If using arrow function and want to export in any other file:-

export const data1 = (a,b) => {
    return a + b;
}




// Anonymous function
{/* <button onclick={()=>{ console.log('hello') }}>

</button> */}
