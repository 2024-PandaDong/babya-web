import React from "react";
import * as S from "./style";
import {BtnWrap, DeleteBtn, QuizListBox, ReadBtn} from "./style";

const Quiz = () => {
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
                                {Array.from({ length: 10 }).map((_, i: number) => (
                                    <S.QuizList>
                                        <S.NumWrap>{i+1}</S.NumWrap>
                                        <S.QuestionsWrap>동찬이 별명은 동바오이다</S.QuestionsWrap>
                                        <S.AnswerWrap>Y</S.AnswerWrap>
                                        <S.CreateDateWrap>2024-06-27</S.CreateDateWrap>
                                        <S.ManagementWrap>
                                            <S.BtnWrap>
                                                <S.ReadBtn>조회</S.ReadBtn>
                                                <S.DeleteBtn>삭제</S.DeleteBtn>
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