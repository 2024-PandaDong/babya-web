import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {babyaAxios} from "src/libs/axios/CustomAxios";
import {showToast} from "src/libs/toast/Swal";

const useQuizWrite = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [answer, setAnswer] = useState<boolean | null>(null);
    const [description, setDescription] = useState("");

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleClickAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { id } = e.target as HTMLButtonElement;
        if (id === "true") {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }

    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            handleClickQuizCreate();
        }
    }

    const handleClickQuizCreate = async () => {
        if (title.length === 0) return
        if (answer === null) return
        if (description.length === 0) return

        try {
            await babyaAxios.post("quiz", {
                title: title,
                content: description,
                answer: answer
            }).then(() => {
                showToast("success", "퀴즈 생성 성공");
                navigate("/quiz");
            })
        } catch (error) {
            console.log(error)
        }
    }

    return {
        title,
        answer,
        description,
        handleChangeTitle,
        handleClickAnswer,
        handleChangeDescription,
        handleKeyDown,
        handleClickQuizCreate,
    }
}

export default useQuizWrite;