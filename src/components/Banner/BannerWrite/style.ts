import styled from "styled-components";
import DatePicker from 'react-datepicker';
import Check from "src/assets/img/Banner/Check.svg";

export const BannerWriteBackground = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 30px;
    padding: 60px 0;
    overflow: hidden auto;
    
    background: #DBD5FF;
`

export const GroupManagementWrap = styled.div`
    width: 88%;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const GroupManagementTitle = styled.span`
    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.4rem;
    
    padding-left: 20px;
`

export const GroupManagement = styled.div`
    width: 100%;
    height: 60%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    
    padding: 0 20px;
`

export const GroupManagementMenuWrap = styled.div`
    width: 50%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
`

export const BeforeButtonWrap = styled.button`
    width: 50%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
    border-bottom: 3px solid #BBAFFF;
    
    cursor: pointer;
    padding-top: 3px;
`

export const BeforeButtonImg = styled.img`
    width: 30px;
    height: 30px;
`

export const BeforeButtonText = styled.span`
    color: #BBAFFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.3rem;
`

export const AfterButtonWrap = styled.button`
    width: 50%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
    cursor: pointer;
`

export const AfterButtonImg = styled.img`
    width: 30px;
    height: 30px;
`

export const AfterButtonText = styled.span`
    color: #D9D9D9;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.3rem;
`

export const SaveButtonWrap = styled.div`
    width: 50%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const SaveButton = styled.button`
    width: 38%;
    height: 55%;
    
    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.4rem;
    
    border-radius: 10px;
    background: #BBAFFF;
    
    cursor: pointer;
`

export const AreaSelectWrap = styled.div`
    width: 88%;
    min-height: 300px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const AreaSelectTitle = styled.span`
    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.4rem;
    
    padding-left: 20px;
`

export const AreaSelect = styled.div`
    width: 100%;
    height: 85%;
    
    display: flex;
    flex-flow: row wrap;
    
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    
    gap: 20px;
    padding: 32px 40px;
`

export const NationwideCheckboxWrap = styled.div`
    width: 100%;
    height: auto;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
    gap: 25px;
`

export const NationwideCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width: 30px;
    height: 30px;

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

export const NationwideCheckboxText = styled.label`
    color: #000;
    font-size: 1.3rem;
    
    cursor: pointer;
`

export const AreaCheckboxWrap = styled.div`
    width: auto;
    height: calc(100% - 46px);
    
    display: flex;
    flex-flow: column wrap;
    
    gap: 20px 40px;
`

export const AreaCheckboxBox = styled.div`
    width: auto;
    height: auto;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
    gap: 25px;
`

export const AreaCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width: 30px;
    height: 30px;

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

export const AreaCheckboxText = styled.label`
    color: #000;
    font-size: 1.3rem;

    cursor: pointer;
`

export const BaseSettingWrap = styled.div`
    width: 88%;
    min-height: 650px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    margin-top: 20px;
`

export const BaseSettingTitle = styled.span`
    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.4rem;

    padding-left: 20px;
`

export const BaseSettingBox = styled.div`
    width: 100%;
    height: 92%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

export const BaseSetting = styled.div`
    width: 90%;
    height: 88%;
    
    display: flex;
    flex-direction: column;
    
    border: 1px solid #D9D9D9;
`

export const BannerTitleNameWrap = styled.div`
    width: 100%;
    height: 12%;
    
    display: flex;
    flex-direction: row;
`

export const BannerSubTitleWrap = styled.div`
    width: 100%;
    height: 12%;

    display: flex;
    flex-direction: row;
`

export const BannerSourceWrap = styled.div`
    width: 100%;
    height: 12%;

    display: flex;
    flex-direction: row;
`

export const BannerLinkWrap = styled.div`
    width: 100%;
    height: 12%;

    display: flex;
    flex-direction: row;
`

export const TitleWrap = styled.div`
    width: 18%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border-bottom: 1px solid #FFF;
    background: #DDD7FF;
`

export const Title = styled.span`
    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.2rem;
`

export const ContentWrap = styled.div`
    width: 82%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border-bottom: 1px solid #D9D9D9;
`

export const Content = styled.input`
    width: 95%;
    height: 70%;
    
    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1rem;
    
    border: 1px solid #D9D9D9;
    
    outline: none;
    padding: 0 15px;
    
    &::placeholder {
        color: #D9D9D9;
    }
`

export const BannerPeriodWrap = styled.div`
    width: 100%;
    height: 12%;

    display: flex;
    flex-direction: row;
`

export const BannerPeriodTitleWrap = styled.div`
    width: 18%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #FFF;
    background: #DDD7FF;
`

export const BannerPeriodTitle = styled.span`
    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.2rem;
`

export const BannerPeriodContentWrap = styled.div`
    width: 82%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #D9D9D9;
`

export const BannerPeriodContent = styled.div`
    width: 95%;
    height: 70%;

    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1rem;
    
    display: flex;
    flex-direction: row;
    align-items: center;

    border: 1px solid #D9D9D9;
    
    gap: 5px;
`

export const BannerPeriodDate = styled(DatePicker)`
    width: 140px;
    
    color: #D9D9D9;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1rem;
    
    border: none;
    outline: none;
    cursor: initial;
    
    margin-left: 15px;
`

export const BannerPeriodDateIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const BannerImageWrap = styled.div`
    width: 100%;
    height: 40%;

    display: flex;
    flex-direction: row;
`

export const BannerImageTitleWrap = styled.div`
    width: 18%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #D9D9D9;
    background: #DDD7FF;
`

export const BannerImageTitle = styled.span`
    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.2rem;
    
    line-height: 30px;
    text-align: center;
`

export const BannerImageContentWrap = styled.div`
    width: 82%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const BannerImageContentBox = styled.div`
    width: 95%;
    height: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid #D9D9D9;
    
    gap: 10px;
    cursor: pointer;
`

export const BannerImageContentIcon = styled.img`
    width: 50px;
    height: 50px;
`

export const BannerImageContent = styled.span`
    color: #D9D9D9;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1rem;
`