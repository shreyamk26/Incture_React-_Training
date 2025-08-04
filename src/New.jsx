import { use, useState } from "react";

function New(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <h3>Counter App</h3>
            <button onClick={()=> setCount(count+1)}>Increment</button>
                 <button onClick={()=>{count>0&& setCount(count-1)}}>Decrement</button>
                 <button onClick={()=>setCount(0)}>Reset</button>
                  <p>Count: {count}</p>
        </div>
    )
}
export default New;
