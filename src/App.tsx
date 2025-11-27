import { useState } from 'react'
import Navbar from '#components/Navbar/Navbar';

function App() {
  
  const [count, setCount] = useState(8)
  console.log(count);
  return (
    <>

    <main>
      <Navbar/>
    </main>
    </>
    
  )
}

export default App
