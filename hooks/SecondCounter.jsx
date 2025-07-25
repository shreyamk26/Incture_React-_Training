import useCounter from "./useCounter";

function SecondCounter(){
      const {count,increment,decrement,reset}=useCounter(20);

    return(
        <div>
            <h1>SecondCounter</h1>
            <h2>Count:{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
   

}
export default SecondCounter;