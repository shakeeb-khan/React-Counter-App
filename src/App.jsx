import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 style={{padding:"5px", border:"2px dotted white"}}>The Count is: {count}</h3>
      <button style={{margin:"20px"}} onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </>
  )
}

export default App
