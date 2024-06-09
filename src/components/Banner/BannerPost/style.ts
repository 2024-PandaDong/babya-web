import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: calc(93% - 60px);
`

export const TitleWrap = styled.div`
    width: 100%;
    height: 10%;
    
    display: flex;
    
    background: #DDD7FF;
`

export const ContentWrap = styled.div`
    width: 100%;
    height: 15%;

    display: flex;
    
    border-bottom: 1px solid #D9D9D9;
`

export const CheckBoxWrap = styled.div`
    width: 6%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
    width: 20px;
    height: 20px;

    border: 1px solid #D9D9D9;
    border-radius: 5px;
    background: #FFF;

    appearance: none;
    cursor: pointer;
    
    &:checked {
        border: none;
    }

    &:checked:before {
        height: 90%;
        content: '✓';
        font-size: 0.85rem;
        display: block;
        text-align: center;
        color: #FFF;
        background: #3a69fd;
        border: 1px solid #3a69fd;
        border-radius: 5px;
    }
`

export const Num = styled.span`
    width: 6%;
    height: 100%;
    
    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.9rem;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TitleName = styled.span`
    width: 33%;
    height: 100%;

    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.9rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Area = styled.span`
    width: 18%;
    height: 100%;

    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.9rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Category = styled.span`
    width: 15%;
    height: 100%;

    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.9rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ManagementWrap = styled.div`
    width: 22%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Management = styled.span`
    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.9rem;
`

export const ModifyButton = styled.button`
    width: 40%;
    height: 50%;
    
    color: #FFF;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 0.9rem;
    
    border-radius: 5px;
    background: #BFB3FF;
    
    cursor: pointer;
    margin-right: 10px;
`

export const DisableButton = styled.button`
    width: 40%;
    height: 50%;

    color: #FFF;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 0.9rem;

    border-radius: 5px;
    background: #BEBEBE;
    
    cursor: pointer;
`