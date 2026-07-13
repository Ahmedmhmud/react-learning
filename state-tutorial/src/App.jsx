import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'

function App() {
  return (
    <>
      <Counter />
      <LoginCard />
    </>
  )
}

export default App
