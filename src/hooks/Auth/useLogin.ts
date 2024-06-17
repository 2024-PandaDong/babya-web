import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "src/config/config.json"
import axios from "axios";
import { showToast } from "src/libs/toast/Swal";
import token from "src/libs/token/token";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/tokens/token.constants";

const useLogin = () => {
    const navigate = useNavigate();
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            LoginSubmit();
        }
    }

    const LoginSubmit = async () => {
        if (id === "") {
            showToast("error", "아이디를 입력해주세요");
            return
        }
        if (pwd === "") {
            showToast("error", "비밀번호를 입력해주세요")
            return
        }
        try {
            await axios.post(`${config.BABYA_Server}/auth/login`, {
                email: id,
                pw: pwd,
            }).then((res) => {
                token.setToken(ACCESS_TOKEN_KEY, res.data.data.accessToken);
                token.setToken(REFRESH_TOKEN_KEY, res.data.data.refreshToken);
                showToast("success", "로그인 성공");
                navigate("/");
            })
        } catch(error) {
            showToast("error", "로그인 실패");
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
        handleKeyDown,
        LoginSubmit,
    }
}

export default useLogin;