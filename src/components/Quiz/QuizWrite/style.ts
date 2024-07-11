import styled from "styled-components";

export const QuizWriteBackground = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #DBD5FF;
`

export const QuizWriteContainer = styled.div`
    width: 88%;
    height: 90%;
    
    display: flex;
    flex-direction: column;
`

export const QuizWriteTitleWrap = styled.div`
    width: 100%;
    height: 15%;
    
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 10px;
`

export const QuizWriteTitle = styled.span`
    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.5rem;
`

export const QuizWriteWrap = styled.div`
    width: 100%;
    height: 85%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const QuizWrite = styled.div`
    width: 95%;
    height: 90%;
    
    display: flex;
    flex-direction: column;
    
    gap: 5px;
`

export const TitleWrap = styled.div`
    width: 100%;
    height: 15%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
    border-bottom: 1px solid #D9D9D9;
    
    gap: 25px;
    padding-left: 28px;
`

export const TitleText = styled.span`
    width: auto;
    height: 100%;
    
    color: #000;
    font-family: Pretendard-ExtraBold, sans-serif;
    font-size: 1.4rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    white-space: nowrap;
    margin-right: 5px;
`

export const TitleInput = styled.input`
    width: 70%;
    height: 50%;
    
    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.4rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    
    border: none;
    outline: none;
    
    &::placeholder {
        color: #D9D9D9;
    }
`

export const QuizCreateBtnWrap = styled.div`
    width: 18%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const QuizCreateBtn = styled.button`
    min-width: 80px;
    width: 62%;
    height: 42%;
    
    color: #FFF;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 1.1rem;
    
    border-radius: 10px;
    background: #BBAFFF;
    
    cursor: pointer;
    white-space: nowrap;
    ;
`

export const AnswerWrap = styled.div`
    width: 100%;
    height: 15%;

    display: flex;
    flex-direction: row;
    align-items: center;

    border-bottom: 1px solid #D9D9D9;
    
    gap: 25px;
    padding-left: 28px;
    margin-bottom: 30px;
`

export const AnswerText = styled.span`
    width: auto;
    height: 100%;
    
    color: #000;
    font-family: Pretendard-ExtraBold, sans-serif;
    font-size: 1.4rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    margin-right: 5px;
`

export const AnswerTrueBtn = styled.button<{$isAnswer: boolean}>`
    width: 45px;
    height: 45px;
    
    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.4rem;
    
    border-radius: 10px;
    background: ${({$isAnswer}) => $isAnswer === true ? "#7896FF" : "#D9D9D9"};
    
    cursor: pointer;
`

export const AnswerFalseBtn = styled.button<{$isAnswer: boolean}>`
    width: 45px;
    height: 45px;
    
    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.4rem;
    
    border-radius: 10px;
    background: ${({$isAnswer}) => $isAnswer === false ? "#FF4B4B" : "#D9D9D9"};
    
    cursor: pointer;
`

export const DescriptionWrap = styled.div`
    width: 100%;
    height: 60%;

    display: flex;
    flex-direction: row;
    align-items: center;
    
    gap: 30px;
    padding-left: 28px;
`

export const DescriptionText = styled.span`
    width: auto;
    height: 100%;

    color: #000;
    font-family: Pretendard-ExtraBold, sans-serif;
    font-size: 1.4rem;
`

export const DescriptionInput = styled.textarea`
    width: 85%;
    height: 100%;

    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.4rem;
    line-height: inherit;

    display: flex;
    flex-direction: row;
    align-items: center;

    border: none;
    outline: none;
    resize: none;

    &::placeholder {
        color: #D9D9D9;
    }
`