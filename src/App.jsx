import { useState } from 'react'
import './App.css'
// import Counter from './components/Counter'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
 return(
  <div>
{/* <h2 style={{color:"red", fontFamily:"monospace"}}>React- State Management :</h2> */}
{/* <Counter/> */}
<ProductList/>
<Cart/>
  </div>
  )
}

export default App
