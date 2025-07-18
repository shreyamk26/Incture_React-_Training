// //--------template literals----------
// //eg:1
// let name="shreya";
// let city="kundapura"
// let profession="student"
// // console.log("Welcome to my world : Name is- ",name,"I am from ",city,"and my profession is ",profession)
// // instead
// // Template literals provide an easier way to embed expressions and variables within strings. They use backticks (`) instead of quotes (' or "), and you can embed expressions with ${}.
// console.log(`My name is :${name}.I am from ${city} and my profession is ${profession}`);

// //eg:2:using array

// let num=[10,20,30,40];

// let[x,y,z,a]=num;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);

// //eg3:

// let data=[20,78,33,22]
// let second_data=[...num,50,60];//only 3 dots 
// console.log(data)
// console.log(second_data)


// // ------rest opertaor-------
// // -- Collects the remaining elements into an array (used in function arguments).
// // eg:1
// function displayname(...names){
// console.log(names);
// }
// displayname("shreya","ajay","mike","john");

// //eg:2-reduce
// // Spread (...): Expands an array or object into individual elements.


// function sum(...numbers)
// {
//     return numbers.reduce((a,b)=>a+b);
// }
// console.log(sum(1,2,3,4,5,7,8));

// ----classes---
//ES6 introduced a more formal syntax for creating classes in JavaScript, which were previously done using constructor functions and prototypes.
class Student{
    constructor(name){
        this.name=name;
    }

greet(){
    console.log(`Welcome : ${this.name}`)
}
}
let stu1=new Student("shreya")
let stu2=new Student("mike")
let stu3=new Student("eleven")
let stu4=new Student("will")
let stu5=new Student("steev")
stu1.greet();
stu2.greet();


//-------MAP---------

// Map: A collection of key-value pairs, where both keys and values can be any data type.

// Set: A collection of unique values.

let emp=new Map();
emp.set("id","111");
emp.set("name","shreya");
emp.set("city","adyar")
console.log(emp.get("id"),emp.get("name"),emp.get("city"))

// set 

let set=new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(50);
set.add(50);//we cannot sore duplicate element in set
console.log(set);