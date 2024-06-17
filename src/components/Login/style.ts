import styled from "styled-components";

export const LoginBackground = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: linear-gradient(67deg, #E5C176 0%, #CE91D4 100%);
`

export const LoginContainer = styled.div`
    width: 1200px;
    height: 650px;
    
    display: flex;
    flex-direction: row;
    
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

export const LoginPanelWrap = styled.div`
    width: 40%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border-radius: 10px 0 0 10px;
    background-color: #EAC77D;
`

export const LoginPanel = styled.img`
    width: 90%;
    height: 90%;
    
    border-radius: 10px 0 0 10px;
`

export const LoginWrap = styled.div`
    width: 60%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border-radius: 0 10px 10px 0;
    background-color: #FFF;
`

export const Login = styled.div`
    width: 65%;
    height: 85%;
    
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: column;
`

export const TitleWrap = styled.div`
    width: 100%;
    height: 70%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Title = styled.span`
    color: #000;
    font-family: Pretendard-ExtraBold, sans-serif;
    font-size: 34px;
`

export const ContentWrap = styled.div`
    width: 100%;
    height: 30%;
`

export const Content = styled.span`
    color: #000;
    font-size: 18px;
`

export const InputFormWrap = styled.div`
    width: 100%;
    height: 45%;
    
    display: flex;
    flex-direction: column;
`

export const InputForm = styled.div`
    width: 100%;
    height: 50%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const InputTitle = styled.label`
    color: #000;
    font-family: Pretendard-Bold, sans-serif;
    font-size: 22px;
    font-weight: 700;
`

export const InputWrap = styled.div`
    width: 100%;
    height: 55px;
    
    display: flex;
    flex-direction: row;
    

    border-radius: 16px;
    background-color: #F6F6F6;

    margin-top: 15px;
    position: relative;
`

export const InputTypeImgWrap = styled.label`
    width: 55px;
    height: 55px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const InputTypeImg = styled.img`
    width: auto;
    height: auto;
`

export const Input = styled.input`
    width: calc(100% - 110px);
    height: 100%;

    color: #000;
    font-size: 16px;
    
    border: none;
    background-color: transparent;
    
    outline: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active { transition: background-color 5000s ease-in-out 0s; }
`

export const InputFeatBtnWrap = styled.div`
    width: 55px;
    height: 55px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const InputFeatBtn = styled.img`
    width: auto;
    height: auto;
    
    cursor: pointer;
`

export const AccountWrap = styled.div`
    width: 100%;
    height: 5%;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
`

export const AccountText = styled.span`
    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 14px;
    line-height: normal;
`

export const AccountBtn = styled.button`
    color: #DC4A86;
    font-family: Pretendard-Medium, sans-serif;
    font-size: 14px;
    
    margin-left: 10px;
    cursor: pointer;
`

export const SubmitButtonWrap = styled.div`
    width: 100%;
    height: 25%;
    
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

export const SubmitButton = styled.button`
    width: 100%;
    height: 70px;

    color: #FFF;
    font-family: Pretendard-SemiBold, sans-serif;
    font-size: 28px;

    border-radius: 25px;
    background-color: #DC4A86;
    
    cursor: pointer;
`