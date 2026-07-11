import { useState } from 'react'
import { Welcome } from './Welcome'
import { Button } from './Button'
import { Hello, HelloWithoutJSX } from './Hello'
import './App.css'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <div>
      <HelloWithoutJSX />
      <Welcome />
      <Button />
    </div>
  )
}

export default App
