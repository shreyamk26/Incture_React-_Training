// import { useState } from 'react'
// import React from 'react'
import './App.css'
import FormComp from './components/FormComp'
// import StateComp from './components/StateComp'
// import Data from './Data'
// import PropComp from './PropComp'
// import Button from './components/Button' 
// import Card from './components/Card'

function App() {

  // const handleClick = () => {
  //   alert("button clicked")
  // }

  return (
    <div>
      <h2>React With Typescript :</h2>

      {/* <Data/> */}

      {/* This will throw an error because 'city' is not defined in MyProps */}
      {/* <PropComp name="Shreya" city="Udupi"/> */}

      {/* This is the correct way as per the interface (only name is required) */}
      {/* <PropComp name="Shreya" /> */}

      {/*  This will show a type error in TypeScript but still render in JS (bad practice) */}
      {/* <PropComp name={123}/> */}

      {/*  Button component with label and onClick */}
      {/* <Button label='Click' onClick={handleClick} /> */}

      {/*  Button with disabled prop */}
      {/* <Button label='Disabled Button' onClick={handleClick} disabled={true} /> */}

{/* <Card>
  <h3>Card Title</h3>
  <p>This is simple card with custom style ..</p>
</Card>


<Card style={{background: "lightblue" , marginTop :"20px", fontFamily:"sans-serif" }}>
  <h3>Styled Card</h3>
  <p>This card has a custom style style passes via props ..</p>
</Card> */}

{/* <StateComp/> */}
<FormComp/>


    </div>
  )
}

export default App
