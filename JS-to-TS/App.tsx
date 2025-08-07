import { useState } from 'react'
import './App.css'
import First from './First'


// First Step: install typescript : npm install -D typescript @react-native/typescript-config @types/jest @types/react @types/react-test-renderer

//Sceond Step: npx tsc --init

function App() {


  return (
   <div>
<h2>React App with  TypeScript to Javascript</h2>
<First/>
   </div>
  )
}

export default App
