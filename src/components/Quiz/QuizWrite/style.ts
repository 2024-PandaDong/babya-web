import styled from "styled-components";
import { flexBox, fontStyle, boxStyle, noScrollBar } from "src/styles/mixins";

export const QuizWriteBackground = styled.div`
    width: 100%;
    height: 100%;
    ${flexBox("row", "center", "center")}
    background: #F2F3F7;
`;

export const QuizWriteContainer = styled.div`
    width: 88%;
    height: 90%;
    ${flexBox("column")}
`;

export const QuizWriteTitleWrap = styled.div`
    width: 100%;
    height: 15%;
    ${flexBox("row", "flex-start", "center")}
    padding-left: 10px;
`;

export const QuizWriteTitle = styled.span`
    ${fontStyle("1.5rem", "SemiBold")}
`;

export const QuizWriteWrap = styled.div`
    width: 100%;
    height: 85%;
    ${flexBox("row", "center", "center")}
    ${boxStyle("#FFF", "10px", "0 4px 4px rgba(0, 0, 0, 0.25)")}
`;

export const QuizWrite = styled.div`
    width: 95%;
    height: 90%;
    ${flexBox("column")}
    gap: 5px;
`;

export const TitleWrap = styled.div`
    width: 100%;
    height: 15%;
    ${flexBox("row", "flex-start", "center")}
    border-bottom: 1px solid #D9D9D9;
    gap: 25px;
    padding-left: 28px;
`;

export const TitleText = styled.span`
    ${fontStyle("1.4rem", "ExtraBold")}
    white-space: nowrap;
    margin-right: 5px;
`;

export const TitleInput = styled.input`
    width: 70%;
    height: 50%;
    ${fontStyle("1.4rem", "SemiBold")}
    border: none;
    outline: none;

    &::placeholder {
        color: #D9D9D9;
    }
`;

export const QuizCreateBtnWrap = styled.div`
    width: 18%;
    height: 100%;
    ${flexBox("row", "flex-end", "center")}
`;

export const QuizCreateBtn = styled.button`
    min-width: 80px;
    width: 62%;
    height: 48%;
    ${fontStyle("1rem", "Bold", "#FFF")}
    ${boxStyle("#4A4E69", "10px")}
    cursor: pointer;
    white-space: nowrap;
`;

export const AnswerWrap = styled.div`
    width: 100%;
    height: 15%;
    ${flexBox("row", "flex-start", "center")}
    border-bottom: 1px solid #D9D9D9;
    gap: 25px;
    padding-left: 28px;
    margin-bottom: 30px;
`;

export const AnswerText = styled.span`
    ${fontStyle("1.4rem", "ExtraBold")}
    margin-right: 5px;
`;

export const AnswerTrueBtn = styled.button<{$isAnswer: boolean}>`
    width: 45px;
    height: 45px;
    ${fontStyle("1.4rem", "SemiBold", "#FFF")}
    ${boxStyle(({ $isAnswer }: { $isAnswer: boolean }) => ($isAnswer ? "#7896FF" : "#D9D9D9"), "10px")}
    cursor: pointer;
`;

export const AnswerFalseBtn = styled.button<{$isAnswer: boolean}>`
    width: 45px;
    height: 45px;
    ${fontStyle("1.4rem", "SemiBold", "#FFF")}
    ${boxStyle(({ $isAnswer }: { $isAnswer: boolean }) => ($isAnswer ? "#FF4B4B" : "#D9D9D9"), "10px")}
    cursor: pointer;
`;

export const DescriptionWrap = styled.div`
    width: 100%;
    height: 60%;
    ${flexBox("row", "flex-start", "center")}
    gap: 30px;
    padding-left: 28px;
`;

export const DescriptionText = styled.span`
    ${fontStyle("1.4rem", "ExtraBold")}
`;

export const DescriptionInput = styled.textarea`
    width: 85%;
    height: 100%;
    ${fontStyle("1.4rem", "SemiBold")}
    line-height: inherit;
    border: none;
    outline: none;
    resize: none;

    &::placeholder {
        color: #D9D9D9;
    }
`;
