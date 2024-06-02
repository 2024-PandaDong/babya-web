import React from "react";
import * as S from './style';
import {MenuData} from "src/constants/datas/MenuData";
import Logo from "src/assets/img/Common/Sidebar/BabyaLogo.svg"
import Profile from "src/assets/img/Common/Sidebar/ExamProfile.svg";

const Sidebar = () => {
    return (
        <S.SidebarContainer>
            <S.InfoWrap>
                <S.Info>
                    <S.LogoWrap>
                        <S.Logo src={Logo}></S.Logo>
                        <S.LogoName>애기야</S.LogoName>
                    </S.LogoWrap>
                    <S.Profile src={Profile}></S.Profile>
                    <S.ProfileName>김주환 관리자님</S.ProfileName>
                </S.Info>
            </S.InfoWrap>
            <S.MenuWrap>
                {MenuData.map((data) => (
                    <S.MenuBox key={data.id}>
                        <S.Menu>
                            <S.MenuImg src={data.icon} />
                            <S.MenuName>{data.name}</S.MenuName>
                        </S.Menu>
                    </S.MenuBox>
                ))}
            </S.MenuWrap>
            <S.LogOutWrap>
                <S.LogOut>로그아웃</S.LogOut>
            </S.LogOutWrap>
        </S.SidebarContainer>
    )
}

export default Sidebar;