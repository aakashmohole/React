import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  // const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('') 
  const [copied, setCopied] = useState(false)


  const passwordGenerator = useCallback(() => {
    let  pass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"

    if(includeNumbers) str += "0123456789"
    if(includeSymbols) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`"
    if (length < 1) return;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length, includeNumbers, includeSymbols, setPassword])


  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-red-700'>
        <h1 className='text-center pb-5 text-white'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly/>
          <button  className= "outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"> Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="includeNumbers" defaultChecked={includeNumbers} onChange={() =>{setIncludeNumbers((prev) => !prev)}} />
            <label htmlFor="includeNumbers">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="includeSymbols" defaultChecked={includeSymbols} onChange={() =>{setIncludeSymbols((prev) => !prev)}} />
            <label htmlFor="includeSymbols">Symbols</label>
          </div>
          <button className='bg-blue-700 text-white px-3 py-1 rounded-lg' onClick={passwordGenerator}>Generate Password</button>

        </div>
      </div>
    </> 
  )
}

export default App
