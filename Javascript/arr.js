// // // -----------declartion of array--------------
// // // let num=[10,20,30,40];
// // // console.log(num)
// // // let num=new Array(10,20,23,45)
// // // console.log(num)

// // // ----array  store different type of data--------
// // let data=[10,20,"aaa",true]
// // console.log(data)
// // console.log(data[3])

// // //modify data

// // data[1]="shreya"
// // console.log(data)

// // //to find no of element in array
// // console.log(data.length)

// // //to print array elements using for loop
// // // for(let i=0;i<data.length;i++)
// // // {
// // //     console.log(data[i])
// // // }

// // //------for-in loop-----------
// // // for(let x of data){
// // //     console.log(x)
// // // }

// // ----Array functions-----
// let data=[10,20,"aaa",true];
//  console.log(data)
// //insert at end of array
//  data.push(200);
//   console.log(data)

//   //insert at beginning
// data.unshift(100);
//  console.log(data)

// //remove an element at end of an array
// data.pop();
//  console.log(data)
  
//  //remove an element at beginning of an array

//  data.shift();
//   console.log(data)

//-------find index of an array---
// console.log(data)
// console.log(data.indexOf("aaa"))


//sort an aray
let data=[10,2,9,11,82];

for(let i=0;i<data.length;i++)
{
   for(let j=1;j<data.length;j++){
    if(data[j]<data[i])
    {
        data[i]=data[j];
        data[j]=data[j+1];
    }
    
   } 

}
   console.log(data);


//reverse 
// console.log(data.reverse());
