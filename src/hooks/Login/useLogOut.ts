import Token from "src/libs/token/token";
import {useNavigate} from "react-router-dom";

const useLogOut = () => {
    const navigate = useNavigate();
    const handleMenuClick = (path) => {
        navigate(path);
    }

    const handleLogOutClick = () => {
        window.location.href = "/login"
        Token.clearToken()
    }

    return { handleMenuClick, handleLogOutClick }
}

export default useLogOut;