import  { useState } from 'react';

const NewCounter = () => {
  const [count,setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() =>setCount(count + 1)}>Increment</button>
      <br />
      <button onClick={() =>count>0 && setCount(count-1)}>Decrement</button>
      <br />
      <button onClick={() =>setCount(0)}>Reset</button>
    </div>
  );
};

export default NewCounter;
