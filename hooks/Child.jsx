import { forwardRef } from "react";
function Child(props,ref){
    return(
        
            <div>
            <h2>Child Component : </h2> <br />
            <input type="text" ref={ref} /> <br />
            </div>
    )
    
}


export default forwardRef(Child);