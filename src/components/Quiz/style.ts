import styled from "styled-components";

export const QuizBackground = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #DBD5FF;
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
    font-size: 1.1rem;
    
    border-radius: 10px;
    background: #FFCB29;
    
    cursor: pointer;
`

export const QuizSearchWrap = styled.div`
    width: auto;
    height: 40px;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const QuizSearch = styled.input`
    width: 300px;
    height: 100%;
    
    color: #000;
    font-family: Pretendard-Medium, sans-serif;

    border: 1px solid #D9D9D9;
    border-radius: 5px;
    background-color: transparent;

    padding: 0 15px;
    outline: none;
    
    &::placeholder {
        color: #D9D9D9;
    }
`

export const QuizSearchBtn = styled.button`
    width: 85px;
    height: 100%;
    
    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.1rem;
    
    border-radius: 5px;
    background: #BBAFFF;
    
    cursor: pointer;
    margin-left: 10px;
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
    background: #DDD7FF;
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
    width: 35%;
    height: 100%;

    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.95rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const AnswerWrap = styled.div`
    width: 12%;
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
    width: 21%;
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

    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1rem;
    
    border-radius: 5px;
    background: #7896FF;
    
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