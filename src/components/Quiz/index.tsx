import React, { useRef, useEffect, useMemo, useCallback } from "react";
import * as S from "./style";
import useQuiz from "src/hooks/Quiz/useQuiz";
import SearchIcon from "src/assets/img/Common/SearchIcon.svg";

const Quiz = () => {
    const {
        quizList,
        searchValue,
        handleClickQuizWrite,
        handleChangeValue,
        handleKeydown,
        handleClickDelete
    } = useQuiz();
    const listBoxRef = useRef<HTMLDivElement | null>(null);

    const currentData = useMemo(() => {
        return quizList.length ? quizList : [];
    }, [quizList]);

    useEffect(() => {
        if (listBoxRef.current) {
            listBoxRef.current.scrollTop = 0;
        }
    }, [currentData]);

    const handleDelete = useCallback((quizId: number) => {
        handleClickDelete(quizId);
    }, [handleClickDelete]);

    return (
        <S.QuizBackground>
            <S.QuizContainer>
                <S.QuizTitleWrap>
                    <S.QuizTitle>퀴즈 관리</S.QuizTitle>
                </S.QuizTitleWrap>
                <S.QuizWrap>
                    <S.Quiz>
                        <S.OptionWrap>
                            <S.QuizCreateBtn onClick={handleClickQuizWrite}>
                                퀴즈 생성
                            </S.QuizCreateBtn>
                            <S.QuizSearchWrap>
                                <S.QuizSearchImg src={SearchIcon} alt="검색 아이콘" />
                                <S.QuizSearch
                                    value={searchValue}
                                    placeholder="원하는 퀴즈를 입력해주세요"
                                    onChange={handleChangeValue}
                                    onKeyDown={handleKeydown}
                                />
                            </S.QuizSearchWrap>
                        </S.OptionWrap>
                        <S.QuizListWrap>
                            <S.QuizListTitle>
                                <S.NumWrap>No</S.NumWrap>
                                <S.QuestionsWrap>
                                    <S.Question>질문</S.Question>
                                </S.QuestionsWrap>
                                <S.AnswerWrap>정답</S.AnswerWrap>
                                <S.CreateDateWrap>만든 날짜</S.CreateDateWrap>
                                <S.ManagementWrap>관리</S.ManagementWrap>
                            </S.QuizListTitle>
                            <S.QuizListBox ref={listBoxRef}>
                                {currentData.map((item) => (
                                    <S.QuizList key={item.quizId}>
                                        <S.NumWrap>{item.quizId}</S.NumWrap>
                                        <S.QuestionsWrap>
                                            <S.Question>{item.title}</S.Question>
                                        </S.QuestionsWrap>
                                        <S.AnswerWrap>{item.answer}</S.AnswerWrap>
                                        <S.CreateDateWrap>{item.regDt}</S.CreateDateWrap>
                                        <S.ManagementWrap>
                                            <S.BtnWrap>
                                                <S.ReadBtn>조회</S.ReadBtn>
                                                <S.DeleteBtn onClick={() => handleDelete(item.quizId)}>
                                                    삭제
                                                </S.DeleteBtn>
                                            </S.BtnWrap>
                                        </S.ManagementWrap>
                                    </S.QuizList>
                                ))}
                                <div id="observer" style={{ minHeight: "10px" }}></div>
                            </S.QuizListBox>
                        </S.QuizListWrap>
                    </S.Quiz>
                </S.QuizWrap>
            </S.QuizContainer>
        </S.QuizBackground>
    );
};

export default Quiz;
