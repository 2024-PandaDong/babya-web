import {useNavigate} from "react-router-dom";


const useBanner = () => {
    const navigate = useNavigate();

    const handleBannerWriteClick = () => {
        navigate("/banner-write");
    }
    return {
        handleBannerWriteClick,
    }
}

export default useBanner;