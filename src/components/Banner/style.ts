import styled from "styled-components";
import Check from "src/assets/img/Banner/Check.svg";

export const BannerBackground = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    background: #DBD5FF;
`

export const BannerContainer = styled.div`
    width: 88%;
    height: 90%;
    
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BannerTitleWrap = styled.div`
    width: 100%;
    height: 8%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
    padding-left: 10px;
`

export const BannerTitle = styled.span`
    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.4rem;
`

export const BannerFilterWrap = styled.div`
    width: 100%;
    height: 12%;
    
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background: #FFF;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const BannerFilter = styled.div`
    width: 95%;
    height: 50%;
    
    display: flex;
`

export const BannerFilterTitleWrap = styled.div`
    width: 18%;
    min-width: 120px;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const BannerFilterTitle = styled.span`
    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.3rem;
`

export const BannerCheckboxContainer = styled.div`
    width: 27%;
    min-width: 240px;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BannerCheckboxWrap = styled.div`
    width: auto;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const BannerCheckbox = styled.input.attrs({ type: "checkbox" })`
    width: 22px;
    height: 22px;

    border: 1px solid #D9D9D9;
    border-radius: 5px;
    background: #FFF;

    margin-right: 10px;
    appearance: none;
    cursor: pointer;

    &:checked {
        border: none;
    }

    &:checked:before {
        height: 90%;
        content: '';
        display: block;
        color: #FFF;
        background: #BBAFFF url(${Check}) no-repeat center center;
        background-size: calc(55%);
        border: 1px solid #BBAFFF;
        border-radius: 5px;
    }
`

export const BannerCheckboxText = styled.label`
    color: #000;
    font-size: 1.1rem;
    
    cursor: pointer;
`

export const BannerSearchWrap = styled.div`
    width: 55%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const BannerSearch = styled.input`
    width: 60%;
    min-width: 180px;
    height: 90%;
    
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

export const BannerSearchButton = styled.button`
    width: 15%;
    min-width: 70px;
    height: 90%;
    
    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.1rem;
    
    border-radius: 5px;
    background: #BBAFFF;
    
    cursor: pointer;
    margin-left: 10px;
`

export const BannerWrap = styled.div`
    width: 100%;
    height: 80%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const BannerBox = styled.div`
    width: 95%;
    height: 92%;
    
    display: flex;
    flex-direction: column;
    
    gap: 20px;
`

export const BannerButtonWrap = styled.div`
    width: 100%;
    height: 7%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BannerAllDeleteButton = styled.button`
    width: 10%;
    height: 100%;
    
    color: #757575;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 0.9rem;
    
    border: 1px solid #D9D9D9;
    border-radius: 5px;
    
    cursor: pointer;
`

export const BannerCreateButtonWrap = styled.div`
    width: 20%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
    border-radius: 15px;
    background: #BBAFFF;
    
    cursor: pointer;
    padding: 0 10px;
`

export const BannerCreateIcon = styled.img`
    width: auto;
    height: 90%;
`

export const BannerCreateText = styled.span`
    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.1rem;
    
    margin-right: 10px;
`

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
    height: 92.8%;

    display: flex;
    flex-direction: column;
    
    overflow-y: auto;
    
    &::-webkit-scrollbar{
        display: none;
    }
`

export const Content = styled.div`
    width: 100%;
    min-height: 70px;

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
        content: '';
        display: block;
        color: #FFF;
        background: #BBAFFF url(${Check}) no-repeat center center;
        background-size: calc(55%);
        border: 1px solid #BBAFFF;
        border-radius: 5px;
    }
`

export const Num = styled.span`
    width: 6%;
    height: 100%;
    
    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 0.95rem;
    
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
    font-size: 0.95rem;

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
    font-size: 0.95rem;

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
    font-size: 0.95rem;

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
    font-size: 0.95rem;
`

export const ModifyButton = styled.button`
    width: 40%;
    height: 50%;
    
    color: #FFF;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 0.95rem;
    
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
    font-size: 0.95rem;

    border-radius: 5px;
    background: #BEBEBE;
    
    cursor: pointer;
`