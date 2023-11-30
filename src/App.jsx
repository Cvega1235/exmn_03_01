import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Informa from './Components/Informa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Informa/>
      </div>
    </>
  )
}

export default App
