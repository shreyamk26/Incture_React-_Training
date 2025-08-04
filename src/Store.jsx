// function Store(){
    // let data=10;
//     function updateData(){
//         data=20;
//         alert(`Data :${data}`)
//     }
//     console.log("==============================")
//     return(
// <div>
//     <h2>Store componnet:</h2>
// <h3>Data: {data}</h3>
// <button onClick={updateData}>Update Data</button>
// </div>
//     )
// }
// import {useState} from "react";
import {useState} from "react";
function Store(){
const [data,setData]=useState(10);// data is state name setData is used to update State value
function updateData(){
      setData(20);
        alert(`Data :${data}`)
    }
    console.log("==============================")
    return(
<div>
    <h2>Store componnet:</h2>
<h3>Data: {data}</h3>
<button onClick={updateData}>Update Data</button>
</div>
    )
}
export default Store;