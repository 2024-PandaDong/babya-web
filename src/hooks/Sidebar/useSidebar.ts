import {useNavigate} from "react-router-dom";

const useSidebar = () => {
    const navigate = useNavigate();
    const handleMenuClick = (path) => {
        navigate(path);
    }

    return { handleMenuClick }
}

export default useSidebar;