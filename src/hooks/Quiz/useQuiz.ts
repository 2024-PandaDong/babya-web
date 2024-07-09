import {useEffect, useState} from "react";
import {babyaAxios} from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import {showToast} from "src/libs/toast/Swal";
import {QuizListProps} from "src/types/Quiz/Quiz.interface"

const useQuiz = () => {
    const [quizList, setQuizList] = useState<QuizListProps[]>([]);

    const handleClickDelete = (quizId: number) => {
        Swal.fire({
            title: "정말로 퀴즈를 삭제하시겠습니까?",
            text: "퀴즈를 삭제하면 다시 되돌릴 수 없습니다.",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#D9D9D9",
            confirmButtonText: "퀴즈 삭제",
            cancelButtonText: "취소",
            reverseButtons: false,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await babyaAxios
                        .delete(`quiz/${quizId}`)
                        .then(() => {
                            showToast("success", "퀴즈 삭제 성공");
                            setQuizList(prevData => prevData.filter(item => item.quizId !== quizId));
                        });
                } catch (error) {
                    showToast("error", "퀴즈 삭제 실패");
                    console.log(error);
                }
            }
        });
    }

    useEffect(() => {
        const QuizRead = async () => {
            try {
                await babyaAxios.get("quiz/list", {
                    params: {
                        page: 1,
                        size: 10,
                    }
                }).then((res) => {
                    setQuizList(res.data.data);
                })
            } catch (error) {
                console.log(error)
            }
        }

        QuizRead();
    }, [])
    return {
        quizList,
        handleClickDelete,
    }
}

export default useQuiz;