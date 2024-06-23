import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import { babyaAxios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import {showToast} from "src/libs/toast/Swal";

interface BannerListProps {
    "id": number,
    "lc": string,
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

    const handleClickDisable = (bannerId: number) => {
        console.log(bannerId);
        Swal.fire({
            title: "정말로 배너를 비활성화하시겠습니까?",
            text: "배너를 비활성화하면 다시 되돌릴 수 없습니다.",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#D9D9D9",
            confirmButtonText: "배너 비활성화",
            cancelButtonText: "취소",
            reverseButtons: false,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await babyaAxios
                        .delete(`banner/disable/${bannerId}`)
                        .then(() => {
                            showToast("success", "배너 비활성화 성공");
                            setBannerList(prevData => prevData.filter(item => item.id !== bannerId));
                        });
                } catch (error) {
                    showToast("error", "배너 비활성화 실패");
                    console.log(error);
                }
            }
        });
    }

    useEffect(() => {
        const GetBannerList = async () => {
            try {
                await babyaAxios.get(`banner/list`, {
                    params: {
                        page: 1,
                        size: 10,
                        keyword: "all",
                        type: type,
                    }}).then((res) => {
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
        handleClickDisable,
        handleBannerWriteClick,
    }
}

export default useBanner;