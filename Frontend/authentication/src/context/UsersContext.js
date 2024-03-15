import { createContext } from "react";

const UsersContext = createContext({
    username: null,
    isUserLoggedIn: null
})

export default UsersContext;