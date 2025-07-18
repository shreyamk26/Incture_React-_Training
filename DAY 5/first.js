
//Asynchronous program
// console.log("Program started")

// setTimeout(()=>{
//     console.log("Fetching data from API")
// },5000)//It waits

// console.log("Closing our Application")




const datas = [
  {
    name: "ABC",
    profession: "teacher"
  },
  {
    name: "bbb",
    profession: "Engineer"
  }
];

// Function to display data after a delay
function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name} - ${data.profession}</li>`;
    });
    document.body.innerHTML = output; // Display on the body
  }, 3000);
}

// Function to add new data to the array after a delay
function createData(newData) {
    return new Promise((resolve,reject)=>{
 setTimeout(() => {
    datas.push(newData); 
// let error=false;//run successfully
let error=false;//error occur

if(!error){
    resolve();
}
else{
    reject("Some errro has occured");
}
  }, 5000);
    })
}

//-----callback-------
//   setTimeout(() => {
//     datas.push(newData); // Add the new data to the array
//     callback(); // Execute callback function (getDatas)
//   }, 5000);


// Create a new data object and then display all data

//-------------asynch keyword---------


// createData({ name: "ccc", profession: "Engineer tester" })//insted callback 
// .then(getDatas)
// .catch(err=>console.log("err"));// it print when error occur

async function start(){
await createData({ name: "ccc", profession: "Engineer tester" });
getDatas();
}
start();