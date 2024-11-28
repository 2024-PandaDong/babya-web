import styled from "styled-components";
import { flexBox, fontStyle, boxStyle, noScrollBar } from "src/styles/mixins";

export const MemberBackground = styled.div`
    width: 100%;
    height: 100%;
    ${flexBox()}
    background: #F2F3F7;
`

export const MemberContainer = styled.div`
    width: 88%;
    height: 90%;
    ${flexBox("column")}
`

export const MemberTitleWrap = styled.div`
    width: 100%;
    height: 15%;
    ${flexBox("row", "flex-start", "center")}
    padding-left: 10px;
`

export const MemberTitle = styled.span`
    ${fontStyle("1.5rem", "SemiBold")}
`

export const MemberWrap = styled.div`
    width: 100%;
    height: 85%;
    ${flexBox()}
    ${boxStyle("#FFF", "10px", "0 4px 4px rgba(0, 0, 0, 0.25)")}
`

export const Member = styled.div`
    width: 95%;
    height: 90%;
    ${flexBox("column", "space-between")}
`

export const OptionWrap = styled.div`
    width: 100%;
    height: auto;
    ${flexBox("row", "space-between")}
`

export const MemberSearchWrap = styled.div`
    width: auto;
    height: 40px;
    ${flexBox("row", "flex-end")}
    position: relative;
`;

export const MemberSearchImg = styled.img`
    width: 18px;
    height: auto;
    position: absolute;
    left: 10px;
`

export const MemberSearch = styled.input`
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

export const MemberListWrap = styled.div`
    width: 100%;
    height: 85%;
    ${flexBox("column")}
`

export const MemberListTitle = styled.div`
    width: 100%;
    height: 10%;
    
    display: flex;
    flex-direction: row;
    
    border-bottom: 1px solid #D9D9D9;
    background: #F2F2F2;
`

export const MemberListBox = styled.div`
    width: 100%;
    height: 90%;
    ${flexBox("column")}
    overflow-y: auto;
    ${noScrollBar}
`

export const MemberList = styled.div`
    width: 100%;
    min-height: 12%;

    display: flex;
    flex-direction: row;
    
    border: 1px solid #D9D9D9;
    border-top: none;
`

export const NameWrap = styled.div`
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

export const EmailWrap = styled.div`
    width: 42%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const Email = styled.p`
    width: 100%;
    
    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.95rem;
    
    text-align: center;
    
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
`

export const StateWrap = styled.div`
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
    ${flexBox("row", "space-evenly")}
`

export const PatchBtn = styled.button`
    width: 42%;
    height: 70%;
    ${fontStyle("0.95rem", "SemiBold", "#FFF")}
    ${boxStyle("#FD7D7C", "5px")}
    cursor: pointer;
`