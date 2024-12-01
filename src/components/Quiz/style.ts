import styled from "styled-components";
import { flexBox, fontStyle, boxStyle, noScrollBar } from "src/styles/mixins";

export const QuizBackground = styled.div`
    width: 100%;
    height: 100%;
    ${flexBox()}
    background: #F2F3F7;
`

export const QuizContainer = styled.div`
    width: 88%;
    height: 90%;
    ${flexBox("column")}
`

export const QuizTitleWrap = styled.div`
    width: 100%;
    height: 15%;
    ${flexBox("row", "flex-start", "center")}
    padding-left: 10px;
`

export const QuizTitle = styled.span`
    ${fontStyle("1.5rem", "SemiBold")}
`

export const QuizWrap = styled.div`
    width: 100%;
    height: 85%;
    ${flexBox()}
    ${boxStyle("#FFF", "10px", "0 4px 4px rgba(0, 0, 0, 0.25)")}
`

export const Quiz = styled.div`
    width: 95%;
    height: 90%;
    ${flexBox("column", "space-between")}
`

export const OptionWrap = styled.div`
    width: 100%;
    ${flexBox("row", "space-between")}
`

export const QuizCreateBtn = styled.button`
    width: 110px;
    height: 40px;
    ${fontStyle("1rem", "Bold", "#FFF")}
    ${boxStyle("#4A4E69", "10px")}
    cursor: pointer;
`

export const QuizSearchWrap = styled.div`
    width: auto;
    height: 40px;
    ${flexBox("row", "flex-end")}
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
    ${fontStyle("1rem", "Medium", "#000")}
    ${boxStyle("transparent", "5px")}
    border: 1px solid #D9D9D9;
    padding: 0 15px 0 40px;
    outline: none;

    &::placeholder {
        color: #D9D9D9;
    }
`

export const QuizListWrap = styled.div`
    width: 100%;
    height: 85%;
    ${flexBox("column")}
`

export const QuizListTitle = styled.div`
    width: 100%;
    height: 10%;
    ${flexBox("row")}
    border-bottom: 1px solid #D9D9D9;
    background: #F2F2F2;
`

export const QuizListBox = styled.div`
    width: 100%;
    height: 90%;
    ${flexBox("column")}
    overflow-y: auto;
    ${noScrollBar}
`

export const QuizList = styled.div`
    width: 100%;
    min-height: 12%;
    ${flexBox("row")}
    border: 1px solid #D9D9D9;
    border-top: none;
`

export const NumWrap = styled.div`
    width: 10%;
    height: 100%;
    ${fontStyle("0.95rem", "Medium")}
    ${flexBox("row", "center")}
`

export const QuestionsWrap = styled.div`
    width: 42%;
    height: 100%;
    ${flexBox("row", "flex-start")}
`

export const Question = styled.p`
    width: 100%;
    ${fontStyle("0.95rem", "Medium")}
    text-align: center;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
`

export const AnswerWrap = styled.div`
    width: 10%;
    height: 100%;
    ${fontStyle("0.95rem", "Medium")}
    ${flexBox("row", "center")}
`

export const CreateDateWrap = styled.div`
    width: 16%;
    height: 100%;
    ${fontStyle("0.95rem", "Medium")}
    ${flexBox("row", "center")}
`

export const ManagementWrap = styled.div`
    width: 22%;
    height: 100%;
    ${fontStyle("0.95rem", "Medium")}
    ${flexBox("row", "center")}
`

export const BtnWrap = styled.div`
    width: 100%;
    height: 100%;
    ${flexBox("row", "space-evenly")}
`

export const ReadBtn = styled.button`
    width: 42%;
    height: 70%;
    ${fontStyle("0.95rem", "SemiBold", "#424242")}
    ${boxStyle("#F2F2F2", "5px")}
    cursor: pointer;
`

export const DeleteBtn = styled.button`
    width: 42%;
    height: 70%;
    ${fontStyle("0.95rem", "SemiBold", "#FFF")}
    ${boxStyle("#FF4B4B", "5px")}
    cursor: pointer;
`
