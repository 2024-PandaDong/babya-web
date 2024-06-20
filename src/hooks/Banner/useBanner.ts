import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {REQUEST_TOKEN_KEY, ACCESS_TOKEN_KEY} from "src/constants/tokens/token.constants"
import Token from "src/libs/token/token";
import config from "src/config/config.json";
import axios from "axios";

interface BannerListProps {
    "id": number,
    "url": string,
    "title": string,
    "subTitle": string,
    "regDt": string,
    "type": string,
    "source": string,
}

const useBanner = () => {
    const navigate = useNavigate();
    const [type, setType] = useState<string>("1");
    const [bannerList, setBannerList] = useState<BannerListProps[]>([]);

    console.log(bannerList)

    const handleBannerWriteClick = () => {
        navigate("/banner-write");
    }

    const handleChangeType = (type) => {
        setType(type);
    }

    useEffect(() => {
        const GetBannerList = async () => {
            try {
                await axios.get(`${config.BABYA_Server}/banner/list`, {
                    params: {
                        page: 1,
                        size: 10,
                        keyword: "all",
                        type: type,
                    },
                    headers: {
                        [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`
                    }
                }).then((res) => {
                    setBannerList(res.data.data);
                })
            } catch(error) {
                console.log(error);
            }
        }

        GetBannerList();
    }, [type])
    return {
        type,
        bannerList,
        handleChangeType,
        handleBannerWriteClick,
    }
}

export default useBanner;