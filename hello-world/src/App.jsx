import { useState } from 'react'
import { Welcome } from './Welcome'
import { Button } from './Button'
import { Hello, HelloWithoutJSX } from './Hello'
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList'
import './App.css'
import { Alert } from './Alert'
import { CustomButton } from './CustomButton'
import { Menu } from './Menu'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <div>
      <HelloWithoutJSX />
      <Welcome name="Ahmed" />
      <Button />
      <ProductList />
      <Alert>Everything is loaded</Alert>
      <Alert type="error">Something went wrong!!!</Alert>
      <CustomButton />
      <Menu />
    </div>
  )
}

export default App
