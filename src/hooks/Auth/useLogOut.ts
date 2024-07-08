import Token from "src/libs/token/token";

const useLogOut = () => {
    const handleLogOutClick = () => {
        window.location.href = "/login"
        Token.clearToken()
    }

    return { handleLogOutClick }
}

export default useLogOut;