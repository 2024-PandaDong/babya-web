import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {BannerListProps} from "src/types/Banner/Banner.interface";
import { babyaAxios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import {showToast} from "src/libs/toast/Swal";

const useBanner = () => {
    const navigate = useNavigate();
    const [type, setType] = useState<string>("1");
    const [searchValue, setSearchValue] = useState<string>("");
    const [bannerList, setBannerList] = useState<BannerListProps[]>([]);
    const [bannerListFilter, setBannerListFilter] = useState<BannerListProps[]>([]);

    console.log(bannerListFilter)

    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleClickFilterBanner = () => {
        if (searchValue !== "") {
            const filterData = bannerList.filter((item) => (
                item.title.toLowerCase().includes(searchValue.toLowerCase())
            ))
            console.log(filterData);
            setBannerListFilter(filterData);
        } else {
            setBannerListFilter([]);
        }
    }

    const handleBannerWriteClick = () => {
        navigate("/banner-write");
    }

    const handleBannerModifyClick = (id: number) => {
        navigate(`/banner-modify/${id}`);
    }

    const handleChangeType = (type: string) => {
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
                await babyaAxios.get("banner/list", {
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
        searchValue,
        bannerListFilter,
        handleChangeType,
        handleClickDisable,
        handleChangeInputValue,
        handleClickFilterBanner,
        handleBannerWriteClick,
        handleBannerModifyClick,
    }
}

export default useBanner;