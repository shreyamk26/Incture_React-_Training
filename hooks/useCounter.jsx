import { useState } from "react";
function useCounter(intialValue=5){
    const[count,setCount]=useState(intialValue);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    const reset=()=>setCount(intialValue)

    return{count,increment,decrement,reset}

}
export default useCounter;