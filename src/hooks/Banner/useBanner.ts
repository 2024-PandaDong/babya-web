import React from "react";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import DataTransform from "src/utils/Transform/dataTransform";
import {BannerListProps} from "src/types/Banner/Banner.interface";
import {babyaAxios} from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import {showToast} from "src/libs/toast/Swal";

const useBanner = () => {
    const navigate = useNavigate();
    const [type, setType] = useState<string>("1");
    const [keyword, setKeyword] = useState<string>("all");
    const [searchValue, setSearchValue] = useState<string>("");
    const [bannerList, setBannerList] = useState<BannerListProps[]>([]);
    const [bannerListFilter, setBannerListFilter] = useState<BannerListProps[]>([]);

    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleClickFilterBanner();
        }
    }

    const handleClickFilterBanner = () => {
        if (searchValue !== "") {
            if (DataTransform.AreaCodeTransform(searchValue)) {
                setKeyword(DataTransform.AreaCodeTransform(searchValue));
                setBannerList([]);
            } else {
                const filterData = bannerList.filter((item) => (
                    item.title.toLowerCase().includes(searchValue.toLowerCase())
                ))
                setBannerListFilter(filterData);
                setKeyword("all");
            }
        } else {
            setBannerListFilter([]);
            setKeyword("all");
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
        setSearchValue("");
        setBannerListFilter([]);
    }

    const handleClickDisable = (bannerId: number) => {
        Swal.fire({
            title: "정말로 배너를 삭제하시겠습니까?",
            text: "배너를 삭제하면 다시 되돌릴 수 없습니다.",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#D9D9D9",
            confirmButtonText: "배너 삭제",
            cancelButtonText: "취소",
            reverseButtons: false,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await babyaAxios
                        .delete(`banner/disable/${bannerId}`)
                        .then(() => {
                            showToast("success", "배너 삭제 성공");
                            setBannerList(prevData => prevData.filter(item => item.id !== bannerId));
                        });
                } catch (error) {
                    showToast("error", "배너 삭제 실패");
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
                        keyword: keyword,
                        type: type,
                    }}).then((res) => {
                    setBannerList(res.data.data);
                })
            } catch(error) {
                console.log(error);
            }
        }

        GetBannerList();
    }, [type, keyword])
    return {
        type,
        bannerList,
        searchValue,
        bannerListFilter,
        handleChangeType,
        handleClickDisable,
        handleChangeInputValue,
        handleKeyDown,
        handleClickFilterBanner,
        handleBannerWriteClick,
        handleBannerModifyClick,
    }
}

export default useBanner;