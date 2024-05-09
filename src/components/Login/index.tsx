import React from "react";
import * as S from "src/components/Login/style";
import useLogin from "src/hooks/Login/useLogin";
import LoginPanelImg from "src/assets/img/Login/PanelImage.svg"
import IdImage from "src/assets/img/Login/IdImage.svg";
import DeleteImage from "src/assets/img/Login/IdDeleteImage.svg";
import PwImage from "src/assets/img/Login/PasswordImage.svg";
import ShowImage from "src/assets/img/Login/PasswordShowImage.svg"
import HideImage from "src/assets/img/Login/PasswordHideImage.svg";

const Login = () => {
    const { ...login } = useLogin()

    return (
        <S.LoginBackground>
            <S.LoginContainer>
                <S.LoginPanelWrap>
                    <S.LoginPanel src={LoginPanelImg}></S.LoginPanel>
                </S.LoginPanelWrap>
                <S.LoginWrap>
                    <S.Login>
                        <S.Container>
                            <S.TitleWrap>
                                <S.Title>로그인</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content>로그인을 위해 정보를 입력해주세요.</S.Content>
                            </S.ContentWrap>
                        </S.Container>
                        <S.InputFormWrap>
                            <S.InputForm>
                                <S.InputTitle htmlFor="id">아이디</S.InputTitle>
                                <S.InputWrap>
                                    <S.Input
                                        id="id"
                                        type="text"
                                        $image={IdImage}
                                        value={login.id}
                                        placeholder="아이디를 입력해주세요."
                                        onChange={login.handleChangeValue}></S.Input>
                                    {login.id && (<S.InputBtn src={DeleteImage} onClick={login.handleClickDelete}></S.InputBtn>)}
                                </S.InputWrap>
                            </S.InputForm>
                            <S.InputForm>
                                <S.InputTitle htmlFor="pw">비밀번호</S.InputTitle>
                                <S.InputWrap>
                                    <S.Input
                                        id="pw"
                                        type={login.isTextShow ? "text" : "password"}
                                        $image={PwImage}
                                        value={login.pwd}
                                        placeholder="비밀번호를 입력해주세요."
                                        onChange={login.handleChangeValue}></S.Input>
                                    {login.pwd &&
                                        (<S.InputBtn
                                            src={login.isTextShow ? ShowImage : HideImage}
                                            onClick={login.handleClickShow}></S.InputBtn>)}
                                </S.InputWrap>
                            </S.InputForm>
                        </S.InputFormWrap>
                        <S.AccountWrap>
                            <S.AccountText>계정을 잃어버리셨나요?</S.AccountText>
                            <S.AccountBtn>계정찾기</S.AccountBtn>
                        </S.AccountWrap>
                        <S.SubmitButtonWrap>
                            <S.SubmitButton onClick={login.LoginSubmit}>로그인</S.SubmitButton>
                        </S.SubmitButtonWrap>
                    </S.Login>
                </S.LoginWrap>
            </S.LoginContainer>
        </S.LoginBackground>
    )
}

export default Login;