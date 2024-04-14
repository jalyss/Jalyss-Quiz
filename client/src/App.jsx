import { useState } from 'react'
import WheelWinner from './pages/Wheel'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WheelWinner/>
    </>
  )
}

export default App
