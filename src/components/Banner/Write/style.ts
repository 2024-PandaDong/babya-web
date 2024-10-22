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
    
    background: #F2F3F7;
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

export const GroupManagementCategoryWrap = styled.div`
    width: 50%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
`

export const CategoryButtonWrap = styled.button<{$border: boolean}>`
    width: 50%;
    min-width: 200px;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
    border-bottom: 3px solid ${({$border}) => $border ? "#4A4E69" : "transparent"};
    cursor: pointer;
    padding-top: 3px;
`

export const CategoryButtonImg = styled.img`
    width: 30px;
    height: 30px;
`

export const CategoryButtonText = styled.span<{$color: boolean}>`
    color: ${({$color}) => $color ? "#4A4E69": "#D9D9D9"};
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
    min-width: 110px;
    height: 55%;
    
    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.3rem;
    
    border-radius: 10px;
    background: #4A4E69;
    
    cursor: pointer;
`

export const AreaSelectWrap = styled.div`
    width: 88%;
    min-height: auto;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const AreaSelectTitle = styled.span`
    color: #000;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1.4rem;
    
    padding: 0 0 20px 20px;
`

export const AreaSelect = styled.div`
    width: 100%;
    height: auto;
    
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
        background: #4A4E69 url(${Check}) no-repeat center center;
        background-size: calc(55%);
        border: 1px solid #4A4E69;
        border-radius: 5px;
    }
`

export const NationwideCheckboxText = styled.label`
    color: #000;
    font-size: 1.3rem;
    
    cursor: pointer;
`

export const AreaCheckboxContainer = styled.div`
    width: auto;
    height: calc(100% - 46px);
    
    display: flex;
    flex-flow: row wrap;
    
    gap: 20px 10px;
`

export const AreaCheckboxWrap = styled.div`
    min-width: 19%;
    height: auto;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
    gap: 15px;
`

export const AreaCheckbox = styled.input.attrs({ type: 'checkbox' })`
    min-width: 30px;
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
        background: #4A4E69 url(${Check}) no-repeat center center;
        background-size: calc(55%);
        border: 1px solid #4A4E69;
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
    min-height: 700px;
    
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
    height: 93%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

export const BaseSetting = styled.div`
    width: 92%;
    height: 90%;
    
    display: flex;
    flex-direction: column;
    
    border: 1px solid #D9D9D9;
`

export const BannerTitleNameWrap = styled.div`
    width: 100%;
    height: 11.5%;
    
    display: flex;
    flex-direction: row;
`

export const BannerSubTitleWrap = styled.div`
    width: 100%;
    height: 11.5%;

    display: flex;
    flex-direction: row;
`

export const BannerSourceWrap = styled.div`
    width: 100%;
    height: 11.5%;

    display: flex;
    flex-direction: row;
`

export const BannerLinkWrap = styled.div`
    width: 100%;
    height: 11.5%;

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
    background: #4A4E69;
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
    height: 11.5%;

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
    background: #4A4E69;
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

export const BannerPeriodDate = styled(DatePicker)<{$style: boolean}>`
    width: 140px;
    
    color: ${({ $style }) => $style ? "#D9D9D9": "#000"};
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 1rem;
    
    border: none;
    background: none;
    outline: none;
    cursor: initial;
    
    margin-left: 15px;
    margin-right: ${({$style}) => $style ? "-5" : "0"}px;
`

export const BannerPeriodDateIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const BannerImageWrap = styled.div`
    width: 100%;
    height: 42.5%;

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
    background: #4A4E69;
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

export const BannerImagePreviewWrap = styled.div`
    width: 95%;
    height: 92%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #D9D9D9;
    
    padding: 7px 12px;
`

export const BannerImagePreview = styled.img`
    width: 370px;
    min-width: 200px;
    height: 200px;
    
    border-radius: 10px;
`

export const BannerImagePreviewButtonWrap = styled.div`
    width: 29%;
    height: 60%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const BannerImageChangeButton = styled.button`
    width: 100%;
    height: 40%;
    
    color: #FFF;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 1.1rem;
    
    border-radius: 10px;
    background: #4A4E69;
    
    cursor: pointer;
`

export const BannerImageDeleteButton = styled.button`
    width: 100%;
    height: 40%;

    color: #FFF;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 1.1rem;

    border-radius: 10px;
    background: #BEBEBE;

    cursor: pointer;
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

export const BannerImageInputRef = styled.input.attrs({type: 'file'})`
    display: none;
`