// // if(true)
// // {
// //     // var x=10;
// //     // var keyword has global scope it can access anywhere  that is outside the block
// //     // let x=10;
// //     // // let has local or block scope it value cannot access outside the block and also cannot recreate
// //     // console.log("X : ",x);
// //     // x=20;
// //     // console.log("X ",x);//gives error since it has block scope
// //     //  var x=10;
// //     // var has global scope it value  access outside the block and also can recreate
// //     // console.log("X : ",x);
// //     // x=20;
// //     // console.log("X ",x);//gives error since it has block scope

// // //const
// // const x=20;
// // console.log("X: ",x);
// // x=30;
// // console.log("X ",x);
// // // TypeError: Assignment to constant variable,cannot reinitialize.

// // }
// // // console.log("X: ",x);




// //Variables

// let x=10;
// console.log(x);
// console.log(typeof(x));
// x="ABC";//we need not initialize type of variable it is  loosely typed
// console.log(x);
// console.log(typeof(x));//return type of variable


//typeof() in js
// let x=true;
// let y=null;//type of object 
// let z;//undefined
// let a=" ";
// let b=12341234123412341234123412341234123412341234123412341234123412341111n;

// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(typeof(a));
// console.log(typeof(b));


// Operators in JS
// 1.Tearnary oprtaor:

// x=10;
// y=20;
// var ans=(x>y) ? "a is greater":"b is greater";
// console.log(ans)

//if

// var marks=89;
// if(marks>90)
// {
//     console.log("grade: A")
// }
// else if(marks>80)
// {
//     console.log("grade: B")
// }
// else if(marks>70)
// {
//     console.log("grade: C")
// }
// else if(marks>50)
// {
//     console.log("grade: D")
// }
// else{
//     console.log("fail")
// }

//switch condition

// let ch=9;
// switch(ch){
//     case 1:console.log("mon");
//     break;
//     case 2:console.log("tue");
//     break;
//     case 3:console.log("wed");
//     break;
//     case 4:console.log("thur");
//     break;
//     case 5:console.log("fri");
//     break;
//     case 6:console.log("sat");
//     break;
//     case 7:console.log("sun");
//     break;
//     default:console.log("invalid");
//     break;
// }

// -------------LOOP-----------
// 1.for() loop
// for(i=0;i<5;i++){
//     console.log("hii")
// }

// 2.while loop
let x=1;
while(x<12)
{
    console.log("hi")
    x++;
}

