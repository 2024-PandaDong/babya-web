import React, { useCallback } from "react";
import * as S from "./style";
import useQuizWrite from "src/hooks/Quiz/useQuizWrite";

const QuizWrite = () => {
    const {
        title,
        answer,
        description,
        handleChangeTitle,
        handleClickQuizCreate,
        handleClickAnswer,
        handleKeyDown,
        handleChangeDescription
    } = useQuizWrite();

    const onTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        handleChangeTitle(e);
    }, [handleChangeTitle]);

    const onDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleChangeDescription(e);
    }, [handleChangeDescription]);


    const onAnswerClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        handleClickAnswer(e);
    }, [handleClickAnswer]);

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
                            <S.TitleInput
                                value={title}
                                placeholder="제목을 입력해주세요"
                                onChange={onTitleChange}
                            />
                            <S.QuizCreateBtnWrap>
                                <S.QuizCreateBtn onClick={handleClickQuizCreate}>
                                    퀴즈 생성
                                </S.QuizCreateBtn>
                            </S.QuizCreateBtnWrap>
                        </S.TitleWrap>

                        <S.AnswerWrap>
                            <S.AnswerText>정답:</S.AnswerText>
                            <S.AnswerTrueBtn
                                id="true"
                                $isAnswer={answer}
                                onClick={onAnswerClick}
                            >
                                O
                            </S.AnswerTrueBtn>
                            <S.AnswerFalseBtn
                                id="false"
                                $isAnswer={answer}
                                onClick={onAnswerClick}
                            >
                                X
                            </S.AnswerFalseBtn>
                        </S.AnswerWrap>

                        {/* 설명 입력 */}
                        <S.DescriptionWrap>
                            <S.DescriptionText>설명:</S.DescriptionText>
                            <S.DescriptionInput
                                value={description}
                                placeholder="설명을 입력해주세요"
                                onKeyDown={handleKeyDown}
                                onChange={onDescriptionChange}
                            />
                        </S.DescriptionWrap>
                    </S.QuizWrite>
                </S.QuizWriteWrap>
            </S.QuizWriteContainer>
        </S.QuizWriteBackground>
    );
};

export default QuizWrite;
