import React from "react";
import * as S from "./style";
import useQuiz from "src/hooks/Quiz/useQuiz";

const Quiz = () => {
    const { ...quiz} = useQuiz();

    return (
        <S.QuizBackground>
            <S.QuizContainer>
                <S.QuizTitleWrap>
                    <S.QuizTitle>퀴즈 관리</S.QuizTitle>
                </S.QuizTitleWrap>
                <S.QuizWrap>
                    <S.Quiz>
                        <S.OptionWrap>
                            <S.QuizCreateBtn>퀴즈 생성</S.QuizCreateBtn>
                            <S.QuizSearchWrap>
                                <S.QuizSearch placeholder="원하는 퀴즈를 입력해주세요"></S.QuizSearch>
                                <S.QuizSearchBtn>검색</S.QuizSearchBtn>
                            </S.QuizSearchWrap>
                        </S.OptionWrap>
                        <S.QuizListWrap>
                            <S.QuizListTitle>
                                <S.NumWrap>No</S.NumWrap>
                                <S.QuestionsWrap>질문</S.QuestionsWrap>
                                <S.AnswerWrap>정답</S.AnswerWrap>
                                <S.CreateDateWrap>만든 날짜</S.CreateDateWrap>
                                <S.ManagementWrap>관리</S.ManagementWrap>
                            </S.QuizListTitle>
                            <S.QuizListBox>
                                {quiz.quizList.map((item, idx: number) => (
                                    <S.QuizList key={item.quizId}>
                                        <S.NumWrap>{idx+1}</S.NumWrap>
                                        <S.QuestionsWrap>{item.quizCn}</S.QuestionsWrap>
                                        <S.AnswerWrap>{item.answer}</S.AnswerWrap>
                                        <S.CreateDateWrap>{item.regDt}</S.CreateDateWrap>
                                        <S.ManagementWrap>
                                            <S.BtnWrap>
                                                <S.ReadBtn>조회</S.ReadBtn>
                                                <S.DeleteBtn onClick={() => quiz.handleClickDelete(item.quizId)}>삭제</S.DeleteBtn>
                                            </S.BtnWrap>
                                        </S.ManagementWrap>
                                    </S.QuizList>
                                ))}
                            </S.QuizListBox>
                        </S.QuizListWrap>
                    </S.Quiz>
                </S.QuizWrap>
            </S.QuizContainer>
        </S.QuizBackground>
    )
}

export default Quiz;