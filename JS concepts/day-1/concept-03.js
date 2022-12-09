// Object is one of the useful datastructure that a language can have

const person = {
    name: "Sidharth",
    age: 23,
    isMarried: false,
};

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;

// destructuring
const { name ,age ,isMarried } = person;

// Imp concept:-
let fname = "Sidharth";

const Student = {
    // if key value both are same
    fname,
    lname: "Padhi",
    age: 23,
};

// lets say i want to create student2 which is exactly same as student but have different name.

const Student2 = {...Student, fname:'Jack'}
// Student2 obj is exactly same as Student but name is different.

console.log(Student);
console.log(Student2);


const names = ["Sidharth","Manish","Smith","Barsha"];
const names2 = [...names, "Joel"]; // names2 = names + "Joel"