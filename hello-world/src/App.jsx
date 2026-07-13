import { useState } from 'react'
import { Welcome } from './Welcome'
import { Button } from './Button'
import { Hello, HelloWithoutJSX } from './Hello'
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList'
import './App.css'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <div>
      <HelloWithoutJSX />
      <Welcome name="Ahmed" />
      <Button />
      <ProductList />
    </div>
  )
}

export default App
