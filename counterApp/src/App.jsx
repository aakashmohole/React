import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
      console.log("Counter Value: ", counter);
    }
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1);
      console.log("Counter Value: ", counter);
    }
  }

  return (
    <>
        <h1>Counter Application</h1>
        <h2>Counte Value : {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br />
        <br />
        <button onClick={removeValue}>Remove Value</button>
    </>

  )

}

export default App
