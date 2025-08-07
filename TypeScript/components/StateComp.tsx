import { useState } from "react";

function StateComp(){

// const [count,setCount]=useState<number>(true); //error since here only we can passs string
const [count,setCount]=useState<number>(0);

const handleClick=()=>{
    setCount(count+1);
}

    return(
        <div>
            <h3>Count : {count}</h3>
            <button style={{border:"3px solid red"}} onClick={handleClick}>Increment</button>
        </div>
    )
}

export default StateComp;