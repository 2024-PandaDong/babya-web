import styled from "styled-components";

export const QuizBackground = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #F2F3F7;
`

export const QuizContainer = styled.div`
    width: 88%;
    height: 90%;
    
    display: flex;
    flex-direction: column;
`

export const QuizTitleWrap = styled.div`
    width: 100%;
    height: 15%;
    
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 10px;
`

export const QuizTitle = styled.span`
    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.5rem;
`

export const QuizWrap = styled.div`
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

export const Quiz = styled.div`
    width: 95%;
    height: 90%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const OptionWrap = styled.div`
    width: 100%;
    height: auto;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const QuizCreateBtn = styled.button`
    width: 110px;
    height: 40px;
    
    color: #FFF;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 1rem;
    
    border-radius: 10px;
    background: #4A4E69;
    
    cursor: pointer;
`

export const QuizSearchWrap = styled.div`
    width: auto;
    height: 40px;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    
    position: relative;
`

export const QuizSearchImg = styled.img`
    width: 18px;
    height: auto;
    
    position: absolute;
    left: 10px;
`

export const QuizSearch = styled.input`
    width: 350px;
    height: 100%;
    
    color: #000;
    font-family: Pretendard-Medium, sans-serif;

    border: 1px solid #D9D9D9;
    border-radius: 5px;
    background-color: transparent;

    padding-left: 40px;
    padding-right: 15px;
    outline: none;
    
    &::placeholder {
        color: #D9D9D9;
    }
`

export const QuizListWrap = styled.div`
    width: 100%;
    height: 85%;
    
    display: flex;
    flex-direction: column;
`

export const QuizListTitle = styled.div`
    width: 100%;
    height: 10%;
    
    display: flex;
    flex-direction: row;
    
    border-bottom: 1px solid #D9D9D9;
    background: #F2F2F2;
`

export const QuizListBox = styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    flex-direction: column;
    
    overflow-y: auto;

    &::-webkit-scrollbar{
        display: none;
    }
`

export const QuizList = styled.div`
    width: 100%;
    min-height: 12%;

    display: flex;
    flex-direction: row;
    
    border: 1px solid #D9D9D9;
    border-top: none;
`

export const NumWrap = styled.div`
    width: 10%;
    height: 100%;

    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.95rem;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const QuestionsWrap = styled.div`
    width: 42%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const Question = styled.p`
    width: 100%;
    
    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.95rem;
    
    text-align: center;
    
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
`

export const AnswerWrap = styled.div`
    width: 10%;
    height: 100%;

    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.95rem;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const CreateDateWrap = styled.div`
    width: 16%;
    height: 100%;

    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.95rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ManagementWrap = styled.div`
    width: 22%;
    height: 100%;

    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.95rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const BtnWrap = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const ReadBtn = styled.button`
    width: 42%;
    height: 70%;

    color: #424242;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1rem;
    
    border-radius: 5px;
    background: #F2F2F2;
    
    cursor: pointer;
`

export const DeleteBtn = styled.button`
    width: 42%;
    height: 70%;

    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1rem;

    border-radius: 5px;
    background: #FF4B4B;

    cursor: pointer;
`