import {useRef, useState} from "react";

interface Props {
    title: string,
    subTitle: string,
    source: string,
    link: string,
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
    const [data, setData] = useState<Props>({
        title: "",
        subTitle: "",
        source: "",
        link: "",
        fileUrl: "",
        type: "1",
        lc: "",
        startDate: initialDate,
        endDate: initialDate,
    })

    console.log(data);

    const handleDataChange = (e) => {
        const {id, value} = e.target;

        setData((prevData) => {
            return {...prevData, [id]: value}
        })
    }

    const handleCategoryChange = (e) => {
        console.log(e.target)
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

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const result = reader.result;
                if (typeof result === "string") {
                    setData((prevData) => {
                        return {...prevData, fileUrl: result}
                    });
                }
            }
        }
    }

    const handleFileDelete = () => {
        setData((prevData) => {
            return {...prevData, fileUrl: ""}
        });
    }

    return {
        data,
        initialDate,
        isStartDateOpen,
        isEndDateOpen,
        fileInput,
        handleDataChange,
        handleCategoryChange,
        setIsStartDateOpen,
        setIsEndDateOpen,
        handleChangeStartDate,
        handleChangeEndDate,
        handleFileClick,
        handleFileChange,
        handleFileDelete,
    }
}

export default useBannerWrite;