// Three important array functions for manipulating arrays

//* .map()
//* .filter()
// .reduce()

let nums = [100,200,300,400,500];

// for(let i=0; i<nums.length; i++){
//     nums[i] = nums[i] + 1;
// }

// console.log(nums);

// nums.map((i) => {
//     return <h1> {i} </h1>
// }) --> in react

// map
const data = nums.map((i)=>{
    return i*2;
})

console.log(data);

// filter
const data2 = nums.filter((i)=>{
    return i != 100;
})

console.log(data2);





