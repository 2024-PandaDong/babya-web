import React, { useState } from "react";
import config from "src/config/config.json"
import axios from "axios";

const useLogin = () => {
    const [id, setId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const [isTextShow, setIsTextShow] = useState(false);

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

    const handleClickShow = () => {
        setIsTextShow((current) => !current);
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
        isTextShow,
        handleChangeValue,
        handleClickDelete,
        handleClickShow,
        handleClickSubmit,
    }
}

export default useLogin;