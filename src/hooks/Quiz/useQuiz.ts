import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { babyaAxios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import { showToast } from "src/libs/toast/Swal";
import { QuizListProps } from "src/types/Quiz/Quiz.interface";

const useQuiz = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [quizList, setQuizList] = useState<QuizListProps[]>([]);

    const filteredQuizList = useMemo(() => {
        if (searchValue === "") return quizList;
        return quizList.filter((item) =>
            item.quizCn.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [quizList, searchValue]);

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
            setIsLoading(true);
            setPage((prevPage) => prevPage + 1);
        }
    }, [isLoading]);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0,
        });

        const observerTarget = document.getElementById("observer");

        if (observerTarget) {
            observer.observe(observerTarget);
        }

        return () => {
            if (observerTarget) {
                observer.unobserve(observerTarget);
            }
        };
    }, [handleObserver]);

    const handleClickQuizWrite = useCallback(() => {
        navigate("/quiz-write");
    }, [navigate]);

    const handleChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }, []);

    const handleKeydown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
            }
        },
        []
    );

    const handleClickDelete = useCallback(
        (quizId: number) => {
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
                                setQuizList((prevData) =>
                                    prevData.filter((item) => item.quizId !== quizId)
                                );
                            });
                    } catch (error) {
                        showToast("error", "퀴즈 삭제 실패");
                        console.error(error);
                    }
                }
            });
        },
        []
    );

    useEffect(() => {
        const QuizRead = async () => {
            if (page) {
                try {
                    await babyaAxios
                        .get("quiz/list", {
                            params: {
                                page: page,
                                size: 20,
                            },
                        })
                        .then((res) => {
                            const newQuizList = res.data.data;

                            setIsLoading(newQuizList.length === 0);
                            setQuizList((prevQuizList) => [
                                ...prevQuizList,
                                ...newQuizList,
                            ]);
                        });
                } catch (error) {
                    console.error(error);
                    setIsLoading(false);
                }
            }
        };

        QuizRead();
    }, [page]);

    return {
        quizList,
        searchValue,
        filteredQuizList,
        handleClickQuizWrite,
        handleChangeValue,
        handleKeydown,
        handleClickDelete,
    };
};

export default useQuiz;
