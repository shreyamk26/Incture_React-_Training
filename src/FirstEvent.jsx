// function FirstEvent(){
//     const handleClick=()=>{
// alert("button was clicked")
//     }

import { useState } from "react";

// return(
// <div>
//     <h2>React Event Concept</h2>
//     <button onClick={handleClick}>Click Me</button>
// </div>
// )
// }
// export default FirstEvent;


// changeEvent

// function to change text show in your text.
// function FirstEvent(){ 
//     const [text,setText]=useState('');
//     const handleClick=(event)=>{
// setText(event.target.value);
//     }

// return(
// <div>
//     <h2>React Event Concept</h2>
//     <input type="text" placeholder="Enter a text" onChange={handleClick} />
//     <p>Your text : {text} </p>
// </div>
// )
// }
// export default FirstEvent;


// function FirstEvent(){ 
//     const [name,setName]=useState('');
//     const handleSubmit=()=>{
// alert(`Form submitted by: ${name}`)
//     }

// return(
// <div>
//    <form onSubmit={handleSubmit}>  
//     {/* to display action after submit */}
// <h2>Enter Name: </h2>

// {/* instead of seperate function like above we use arrow function like this  */}
// <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>  
// <button type="submit">Submit</button>  
//    </form>
// </div>
// )
// }
// export default FirstEvent;

// function FirstEvent(){ 
  
//     const handleMouseEnter=()=>{
// console.log("Mouse enterd the box")
//     }
 
  
//     const handleMouseLeave=()=>{
// console.log("Mouse left the box")
//     }


// return(
// <div onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
//  style={{
//     width:"200px",
//     height:"200px",
//     backgroundColor:"lightblue",
//     textAlign:"center",
//     lineHeight:"200px"

    

//  }}>
//     Hover Over me
//  </div>
 
// )
// }
// export default FirstEvent;

// function FirstEvent(){ 
  
//     const greet=(name)=>{
// alert(`Welcom: ${name} to the react session`)

//     }
 
  
 

// return(
// <div>

//     {/* pass function as argumnet here */}
//     <button onClick={()=>greet("Shreya")}>Greet</button>
//  </div>
 
// )
// }
// export default FirstEvent;


//keyboard event


// function FirstEvent(){ 
  
//     const handleKeyDown=(event)=>{
// console.log(`key pressed ${event.target.value}`)
// alert("Key pressed");
//     }



// return(
// <div>
//     <h2>KeyBorad Event</h2>
// <input type="text" onKeyDown={handleKeyDown} />

//  </div>
 
// )
// }
// export default FirstEvent;


function FirstEvent(){ 
  
    const handleKeyDown=(event)=>{
if(event.key==='Enter')
{
    alert("welcome to react session:")
}

    };

return(
<div>
    <h2>Type something:</h2>
<input type="text" onKeyDown={handleKeyDown} />

 </div>
 
)
}
export default FirstEvent;

