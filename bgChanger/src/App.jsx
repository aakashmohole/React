import React, { useState } from 'react';
function App() {
  const [color, setColor] = useState('olive');

  return (
 
      <div className="w-full h-screen duration-200]" style={{ backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='bg-olive-500 hover:bg-olive-600 text-white px-4 py-2 rounded-full' onClick={() => setColor('olive')}>Olive</button>
            <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full' onClick={() => setColor('blue')}>Blue</button>
            <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full' onClick={() => setColor('red')}>Red</button>
            <button className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full' onClick={() => setColor('yellow')}>Yellow</button>
            <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full' onClick={() => setColor('green')}>Green</button>
            <button className='bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full' onClick={() => setColor('purple')}>Purple</button>
            <button className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full' onClick={() => setColor('gray')}>Gray</button>
            <button className='bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full' onClick={() => setColor('black')}>Black</button> 
            <button className='bg-pink-300 hover:bg-pink-200 text-black px-4 py-2 rounded-full' onClick={() => setColor('pink')}>Pink</button>   
            <button className='bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-full' onClick={() => setColor('white')}>White</button>  

          </div>
        </div>
      </div>
    
  )
}

export default App
