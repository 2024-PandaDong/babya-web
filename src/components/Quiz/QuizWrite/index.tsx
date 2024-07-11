import React from "react";
import * as S from "./style";
import useQuizWrite from "src/hooks/Quiz/useQuizWrite";
import quiz from "src/components/Quiz";

const QuizWrite = () => {
    const { ...quizWrite } = useQuizWrite();

    return (
        <S.QuizWriteBackground>
            <S.QuizWriteContainer>
                <S.QuizWriteTitleWrap>
                    <S.QuizWriteTitle onClick={quizWrite.handleClickQuizCreate}>퀴즈 생성</S.QuizWriteTitle>
                </S.QuizWriteTitleWrap>
                <S.QuizWriteWrap>
                    <S.QuizWrite>
                        <S.TitleWrap>
                            <S.TitleText>제목:</S.TitleText>
                            <S.TitleInput
                                value={quizWrite.title}
                                placeholder="제목을 입력해주세요"
                                onChange={quizWrite.handleChangeTitle}></S.TitleInput>
                            <S.QuizCreateBtnWrap>
                                <S.QuizCreateBtn>퀴즈 생성</S.QuizCreateBtn>
                            </S.QuizCreateBtnWrap>
                        </S.TitleWrap>
                        <S.AnswerWrap>
                            <S.AnswerText>정답:</S.AnswerText>
                            <S.AnswerTrueBtn id="true" $isAnswer={quizWrite.answer} onClick={quizWrite.handleClickAnswer}>O</S.AnswerTrueBtn>
                            <S.AnswerFalseBtn id="false" $isAnswer={quizWrite.answer} onClick={quizWrite.handleClickAnswer}>X</S.AnswerFalseBtn>
                        </S.AnswerWrap>
                        <S.DescriptionWrap>
                            <S.DescriptionText>설명:</S.DescriptionText>
                            <S.DescriptionInput
                                value={quizWrite.description}
                                placeholder="설명을 입력해주세요"
                                onKeyDown={quizWrite.handleKeyDown}
                                onChange={quizWrite.handleChangeDescription}></S.DescriptionInput>
                        </S.DescriptionWrap>
                    </S.QuizWrite>
                </S.QuizWriteWrap>
            </S.QuizWriteContainer>
        </S.QuizWriteBackground>
    )
}

export default QuizWrite;