import { useEffect, useState } from "react"
import { DB_URL } from "../utils/constant"
import { useNavigate } from "react-router-dom"

const useLogin = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleLoginSubmit = async (e, email, password) => {
        e.preventDefault();
        const data = await fetch(`${DB_URL}/users`)
        const json = await data.json()
        json.forEach((user) => {
            if (user.email === email && user.password === password) {
                localStorage.setItem('isUserLoggedIn', true)
                localStorage.setItem('userName', user.name)
                navigate('/home')
            }
        })

    }

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
        if (isUserLoggedIn) {
            navigate("/home");
            return;
        }
    }, [navigate]);

    return { showPassword, handleShowPassword, handleLoginSubmit }
}

export default useLogin;