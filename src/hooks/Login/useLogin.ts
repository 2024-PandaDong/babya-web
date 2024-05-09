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

    const LoginSubmit = async () => {
        if (id === "") {
            // Toast로 바꿀 예정
            console.log("아이디를 입력해주세요")
            return
        }
        if (pwd === "") {
            // Toast로 바꿀 예정
            console.log("비밀번호를 입력해주세요")
            return
        }
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
        LoginSubmit,
    }
}

export default useLogin;