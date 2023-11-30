import { useState } from 'react'
import './App.css'
import Informa from './Components/Informa'
import Item from './Components/Item'
import Item2 from './Components/Item2'
import Item3 from './Components/Item3'
import Item4 from './Components/Item4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Informa/>
        <Item/>
        <Item2/>
        <Item3/>
        <Item4/>
      </div>
    </>
  )
}

export default App
