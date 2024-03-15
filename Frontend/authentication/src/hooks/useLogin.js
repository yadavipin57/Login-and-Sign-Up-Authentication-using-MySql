import { useContext, useState } from "react"
import { DB_URL, options } from "../utils/constant"
import { useNavigate } from "react-router-dom"
import UsersContext from "../context/UsersContext"

const useLogin = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const { setUserName, setIsUser } = useContext(UsersContext)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    const postIsUser = async (id) => {
        await fetch(`${DB_URL}/isUser`, options('PUT', { isUser: "true", id: id }))
            .then(() => console.log('Updated successfully'))
            .catch((err) => console.log(err))
    }

    const handleLoginSubmit = async (e, email, password) => {
        e.preventDefault();
        const data = await fetch(`${DB_URL}/users`)
        const json = await data.json()
        json.forEach((user) => {
            if (user.email === email && user.password === password) {
                postIsUser(user.id)
                setUserName(user.name)
                setIsUser(user.isUser)
                navigate('/home')
            }
        })

    }

    return { showPassword, handleShowPassword, handleLoginSubmit }
}

export default useLogin;