import {useRef, useState} from "react";
import axios from "axios";
import config from "src/config/config.json";
import {REQUEST_TOKEN_KEY, ACCESS_TOKEN_KEY} from "src/constants/tokens/token.constants";
import Token from "src/libs/token/token";

interface Props {
    title: string,
    subTitle: string,
    source: string,
    url: string,
    fileUrl: string,
    type: string,
    lc: string,
    startDate: Date,
    endDate: Date,
}

const useBannerWrite = () => {
    const initialDate = new Date();
    const fileInput = useRef(null);
    const [isStartDateOpen, setIsStartDateOpen] = useState(false);
    const [isEndDateOpen, setIsEndDateOpen] = useState(false);
    const [fileImage, setFileImage] = useState("");
    const [data, setData] = useState<Props>({
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

    const handleDataChange = (e) => {
        const {id, value} = e.target;

        setData((prevData) => {
            return {...prevData, [id]: value}
        })
    }

    const handleCategoryChange = (e) => {
        const {id} = e.target;
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

    const handleChangeStartDate = (date) => {
        setData((prevData) => {
            return {...prevData, startDate: date}
        });
        setIsStartDateOpen(false);
    }

    const handleChangeEndDate = (date) => {
        setData((prevData) => {
            return {...prevData, endDate: date}
        });
        setIsEndDateOpen(false);
    }

    const handleFileClick = () => {
        fileInput.current.click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        setData((prevData) => {
            return {...prevData, fileUrl: file}
        })

        const read = new FileReader();
        read.readAsDataURL(file);
        read.onloadend = () => {
            const result = read.result;
            if (typeof result === "string") {
                setFileImage(result);
            }
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
            const formData = new FormData();
            formData.append('url', data.url);
            formData.append('title', data.title);
            formData.append('subTitle', data.subTitle);
            formData.append('startDt', data.startDate.toISOString());
            formData.append('expireDt', data.endDate.toISOString());
            formData.append('type', data.type);
            formData.append('source', data.source);
            formData.append('lc', data.lc);
            formData.append('fileUrl', data.fileUrl);

            await axios.post(`${config.BABYA_Server}/banner`, formData,{
                headers: {
                    REQUEST_TOKEN_KEY: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
                    "Content-Type": "multipart/form-data"
                }
            }).then((res) => {
                console.log(res);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return {
        data,
        initialDate,
        isStartDateOpen,
        isEndDateOpen,
        fileInput,
        fileImage,
        handleDataChange,
        handleCategoryChange,
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