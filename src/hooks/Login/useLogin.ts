import React, { useState } from "react";

const useLogin = () => {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [isTextHide, setIsTextHide] = useState(false);

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === "id") {
            setId(e.target.value);
        } else {
            setPwd(e.target.value);
        }
    }

    const handleClickDelete = () => {
        setId("")
    }

    const handleClickHide = () => {
        setIsTextHide((current) => !current);
    }

    return {
        id,
        pwd,
        isTextHide,
        handleChangeValue,
        handleClickDelete,
        handleClickHide,
    }
}

export default useLogin;