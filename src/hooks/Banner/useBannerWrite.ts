import React, {MutableRefObject, useRef, useState} from "react";
import { babyaAxios } from "src/libs/axios/CustomAxios";
import {BannerWriteProps} from "src/types/Banner/BannerWrite/BannerWrite.interface";
import {showToast} from "src/libs/toast/Swal";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {format} from "date-fns";

const useBannerWrite = () => {
    const date: Date = new Date();
    const initialDate: string = format(date, "yyyy-MM-dd");
    const navigate: NavigateFunction = useNavigate();
    const fileRef: MutableRefObject<any> = useRef(null);
    const [isChecked, setIsChecked] = useState<{[key: string]: boolean}>({});
    const [isStartDateOpen, setIsStartDateOpen] = useState(false);
    const [isEndDateOpen, setIsEndDateOpen] = useState(false);
    const [fileImage, setFileImage] = useState<string>("");
    const [data, setData] = useState<BannerWriteProps>({
        title: "",
        subTitle: "",
        source: "",
        url: "",
        fileUrl: "",
        type: "1",
        lc: "00",
        startDate: initialDate,
        endDate: initialDate,
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

    const handleChangeArea = (name, code) => {
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
            return {...prevData, startDate: date}
        });
    }

    const handleChangeEndDate = (date: string) => {
        setIsEndDateOpen(false);
        setData((prevData) => {
            return {...prevData, endDate: date}
        });
    }

    const handleFileClick = () => {
        fileRef.current.click();
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = e.target.files[0];
            if (!file) return;

            console.log(file)

            const formData = new FormData();
            const imageURL = URL.createObjectURL(file);
            setFileImage(imageURL);
            formData.append("file", file);

            await babyaAxios
                .post(`/upload`, formData,{
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                ).then((res) => {
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

    const SubmitBannerCreate = async () => {
        try {
            await babyaAxios.post(`/banner`,{
                url: data.url,
                title: data.title,
                subTitle: data.subTitle,
                startDt: data.startDate,
                expireDt: data.endDate,
                type: data.type,
                source: data.source,
                lc: data.lc,
                fileUrl: data.fileUrl
            }).then((res) => {
                console.log(res);
                showToast("success", "배너 생성 성공");
                navigate("/banner");
            })
        } catch (error) {
            console.log(error);
        }
    }

    return {
        data,
        date,
        initialDate,
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
        SubmitBannerCreate,
    }
}

export default useBannerWrite;