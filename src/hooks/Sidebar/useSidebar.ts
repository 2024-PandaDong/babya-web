import {useLocation, useNavigate} from "react-router-dom";

const useSidebar = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate();
    const handleMenuClick = (path) => {
        navigate(path);
    }

    return { pathname, handleMenuClick }
}

export default useSidebar;