import { useState } from "react"
import style from './Style.module.css'

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [message, setMessage] = useState("")

    const handleLogin = () => {
        setIsLoggedIn(! isLoggedIn)
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <>
            <button onClick={handleLogin} className={`${style.btn}`}>{isLoggedIn ? "Log Out" : "Log in"}</button>
            <input type="text" value={message} onChange={handleChange} />
            <p>{message}</p>
        </>
    )
}