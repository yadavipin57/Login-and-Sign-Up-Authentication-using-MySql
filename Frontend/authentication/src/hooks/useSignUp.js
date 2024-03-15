import { useState } from "react";
import { DB_URL, options } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
    const [signUpData, setSignUpData] = useState({});
    const navigate = useNavigate()
    const handleSignUpData = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value, isUser: 'false' })
    }

    const handleSignUpSubmit = async (e) => {
        e.preventDefault()
        await fetch(`${DB_URL}/addUser`, options('POST', signUpData))
            .then(() => navigate('/'))
            .catch((err) => console.log("Something is wrong " + err))
    }

    return { handleSignUpData, handleSignUpSubmit }
}

export default useSignUp