
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-green-300 text-black rounded-xl'>Tailwind</h1>
      <Card username = "shivay" btnText = "Click me"/>
      <Card username = "Om"/>
    </>
  )
}

export default App
