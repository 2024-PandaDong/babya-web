import React, { useState } from "react";
import config from "src/config/config.json"
import axios from "axios";

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

    const handleClickSubmit = async () => {
        try {
            await axios.post(`${config.serverUrl}/auth/login`, {
                email: id,
                pw: pwd,
            }).then((res) => {
                console.log(res);
            })
        } catch(error) {
            console.log(error);
        }
    }

    return {
        id,
        pwd,
        isTextHide,
        handleChangeValue,
        handleClickDelete,
        handleClickHide,
        handleClickSubmit,
    }
}

export default useLogin;