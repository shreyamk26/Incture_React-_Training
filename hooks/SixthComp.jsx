import { useRef, useState } from "react";

function SixthComp(){
         const inputRef=useRef();
    function focus(){
   
    //    let input_obj= document.getElementById("input");
    //     input_obj.focus();
    inputRef.current.focus();
    inputRef.current.value="React";
    inputRef.current.style.color="red";
    inputRef.current.style.display="none";
    }
    return(
        <div>
            <h1>Sixth Componnet : </h1>
            <input  type="text" ref={inputRef} /> <br /> <br />
            <button onClick={focus}>Focus Input</button>
        </div>
    )
}

export default SixthComp;