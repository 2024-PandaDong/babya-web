import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import { babyaAxios } from "src/libs/axios/CustomAxios";
import {BannerModifyProps} from "src/types/Banner/BannerModify/BannerModify.interface";
import {showToast} from "src/libs/toast/Swal";
import {NavigateFunction, useNavigate, useParams} from "react-router-dom";
import DataTransform from "src/utils/Transform/dataTransform";

const useBannerWrite = () => {
    const { id } = useParams();
    const navigate: NavigateFunction = useNavigate();
    const fileRef: MutableRefObject<any> = useRef(null);
    const [isChecked, setIsChecked] = useState<{[key: string]: boolean}>({});
    const [isStartDateOpen, setIsStartDateOpen] = useState(false);
    const [isEndDateOpen, setIsEndDateOpen] = useState(false);
    const [fileImage, setFileImage] = useState<string>("");
    const [data, setData] = useState<BannerModifyProps>({
        id: 0,
        title: "",
        subTitle: "",
        source: "",
        url: "",
        fileUrl: "",
        type: "",
        lc: "",
        startDt: "",
        expiredDt: "",
    })

    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;

        setData((prevData) => {
            return {...prevData, [id]: value}
        })
    }

    const handleChangeCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { id } = e.target as HTMLButtonElement;
        if (id === "before") {
            setData((prevData) => {
                return {...prevData, type: "1"}
            })
        } else {
            setData((prevData) => {
                return {...prevData, type: "2"}
            })
        }
    }

    const initialArea = (name: string) => {
        setIsChecked((prevState) => {
            return {...prevState, [name]: true}
        })
    }

    const handleChangeArea = (name: string, code: string) => {
        setIsChecked((prevState) => {
            const newIsChecked = Object.keys(prevState).reduce((obj, key) => {
                obj[key] = false;
                return obj;
            }, {} as { [key: string]: boolean });

            if (!!prevState[name]) newIsChecked[name] = !prevState[name];
            else newIsChecked[name] = true;

            return newIsChecked;
        })

        setData((prevData) => {
            return {...prevData, lc: isChecked[name] ? "" : code}
        });
    }

    const handleChangeStartDate = (date: string) => {
        setIsStartDateOpen(false);
        setData((prevData) => {
            return {...prevData, startDt: date}
        });
    }

    const handleChangeEndDate = (date: string) => {
        setIsEndDateOpen(false);
        setData((prevData) => {
            return {...prevData, expiredDt: date}
        });
    }

    const handleFileClick = () => {
        fileRef.current.click();
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = e.target.files[0];
            if (!file) return;

            const formData = new FormData();
            const imageURL = URL.createObjectURL(file);
            setFileImage(imageURL);
            formData.append("file", file);

            await babyaAxios
                .post("upload", formData,{headers: {"Content-Type": "multipart/form-data"} })
                .then((res) => {
                    const { data } = res.data;
                    setData((prevData) => {
                        return {...prevData, fileUrl: data}
                    })
                });
        } catch (error) {
            console.log(error);
        }
    }

    const handleFileDelete = () => {
        setData((prevData) => {
            return {...prevData, fileUrl: ""}
        });
        setFileImage("")
    }

    const SubmitBannerModify = async () => {
        try {
            await babyaAxios.patch("banner",{
                id: data.id,
                url: data.url,
                title: data.title,
                subTitle: data.subTitle,
                startDt: data.startDt,
                expireDt: data.expiredDt,
                type: data.type,
                source: data.source,
                lc: data.lc,
                fileUrl: data.fileUrl
            }).then(() => {
                showToast("success", "배너 수정 성공");
                navigate("/banner");
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const BannerRead = async () => {
            try {
                await babyaAxios
                    .get(`banner`, { params: { id: id } })
                    .then((res) => {
                        const bannerData = res.data.data

                        setData((prevData) => {return {...prevData, ...bannerData}});
                        setFileImage(bannerData.fileUrl);
                        initialArea(DataTransform.AreaNameTransform(bannerData.lc))
                    })
            } catch(error) {
                console.log(error);
            }
        }

        BannerRead();
    }, []);

    return {
        data,
        isChecked,
        isStartDateOpen,
        isEndDateOpen,
        fileRef,
        fileImage,
        handleChangeData,
        handleChangeCategory,
        handleChangeArea,
        setIsStartDateOpen,
        setIsEndDateOpen,
        handleChangeStartDate,
        handleChangeEndDate,
        handleFileClick,
        handleFileChange,
        handleFileDelete,
        SubmitBannerModify,
    }
}

export default useBannerWrite;