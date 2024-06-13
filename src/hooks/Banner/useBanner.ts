import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import config from "src/config/config.json";
import axios from "axios";


const useBanner = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [url, setUrl] = useState("");

    const handleBannerWriteClick = () => {
        navigate("/banner-write");
    }

    useEffect(() => {
        const GetBannerList = async () => {
            try {
                await axios.get(`${config.BABYA_Server}/banner/list`, {
                    params: {
                        page: 1,
                        size: 20,
                        type: "1",
                        keyword: "all",
                    }
                }).then((res) => {
                    console.log(res.data.data);
                })
            } catch(error) {
                console.log(error);
            }
        }

        GetBannerList();
    }, [])
    return {
        handleBannerWriteClick,
    }
}

export default useBanner;