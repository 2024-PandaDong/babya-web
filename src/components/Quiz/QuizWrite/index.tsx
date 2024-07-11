import React from "react";
import * as S from "./style";
import {
    AnswerBtn,
    AnswerText,
    DescriptionInput,
    DescriptionText,
    QuizCreateBtn,
    QuizCreateBtnWrap,
    TitleInput,
    TitleText
} from "./style";

const QuizWrite = () => {
    return (
        <S.QuizWriteBackground>
            <S.QuizWriteContainer>
                <S.QuizWriteTitleWrap>
                    <S.QuizWriteTitle>퀴즈 생성</S.QuizWriteTitle>
                </S.QuizWriteTitleWrap>
                <S.QuizWriteWrap>
                    <S.QuizWrite>
                        <S.TitleWrap>
                            <S.TitleText>제목:</S.TitleText>
                            <S.TitleInput placeholder="제목을 입력해주세요"></S.TitleInput>
                            <S.QuizCreateBtnWrap>
                                <S.QuizCreateBtn>퀴즈 생성</S.QuizCreateBtn>
                            </S.QuizCreateBtnWrap>
                        </S.TitleWrap>
                        <S.AnswerWrap>
                            <S.AnswerText>정답:</S.AnswerText>
                            <S.AnswerBtn>O</S.AnswerBtn>
                            <S.AnswerBtn>X</S.AnswerBtn>
                        </S.AnswerWrap>
                        <S.DescriptionWrap>
                            <S.DescriptionText>설명:</S.DescriptionText>
                            <S.DescriptionInput placeholder="설명을 입력해주세요"></S.DescriptionInput>
                        </S.DescriptionWrap>
                    </S.QuizWrite>
                </S.QuizWriteWrap>
            </S.QuizWriteContainer>
        </S.QuizWriteBackground>
    )
}

export default QuizWrite;