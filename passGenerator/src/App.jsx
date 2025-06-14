import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('') 
 

  //ref hook to store the pass for the copy action
  const passRef = useRef(null)


  // passwrd generator function for generating a random password 
  // This function generates a random password based on the selected options
  // and updates the password state.
  // It uses a combination of letters, numbers, and symbols based on user preferences.

  const passwordGenerator = useCallback(() => {
    let  pass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"

    if(includeNumbers) str += "0123456789"
    if(includeSymbols) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`"
    if(includeUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (length < 1) return;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, includeNumbers, includeSymbols, includeUppercase, setPassword])

  // Function to copy the generated password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    
    passRef.current.select()

    passRef.current.setSelectionRange(0, 101) // For mobile devices
    // Use the Clipboard API to write the password to the clipboard
    if (!navigator.clipboard) {
      alert("Clipboard API not supported in this browser.")
      return
    }

    window.navigator.clipboard.writeText(password)
      .then(() => {
        alert("Password copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy password: ", err)
      })
  }, [password])
  
  // useEffect for changing the password when the length or options change
  useEffect(() => {
    passwordGenerator()
  }, [length, includeNumbers, includeSymbols, includeUppercase, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-lvh mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-red-700'>
        <h1 className='text-center pb-5 text-white font-bold'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passRef}/>
          <button  className= "outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-300" onClick={copyPasswordToClipboard}> Copy</button>
        </div>
        <div className='flex text-sm gap-x-4 justify-between items-center mb-4'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='text-white' htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="includeNumbers" defaultChecked={includeNumbers} onChange={() =>{setIncludeNumbers((prev) => !prev)}} />
            <label className='text-white' htmlFor="includeNumbers">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="includeUppercase" defaultChecked={includeUppercase} onChange={() =>{setIncludeUppercase((prev) => !prev)}} />
            <label className='text-white' htmlFor="includeUppercase">Uppercase</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="includeSymbols" defaultChecked={includeSymbols} onChange={() =>{setIncludeSymbols((prev) => !prev)}} />
            <label className='text-white' htmlFor="includeSymbols">Symbols</label>
          </div>
          <button className='bg-blue-700 text-white px-3 py-1 rounded-lg' onClick={passwordGenerator}>Generate Password</button>

        </div>
      </div>
    </> 
  )
}

export default App
