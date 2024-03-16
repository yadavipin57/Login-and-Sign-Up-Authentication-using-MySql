import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const useHome = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName");
    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
        if (!isUserLoggedIn) {
            navigate("/");
            return;
        }
    });

    const handleLogOut = () => {
        localStorage.clear()
        navigate('/')
    }

    return { userName, handleLogOut }
}

export default useHome;