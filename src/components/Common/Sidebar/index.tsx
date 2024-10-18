import React from "react";
import * as S from './style';
import useSidebar from "src/hooks/Sidebar/useSidebar";
import useLogOut from "src/hooks/Auth/useLogOut";
import {MenuData} from "src/constants/datas/Sidebar/MenuData";
import Logo from "src/assets/img/Common/Sidebar/BabyaLogo.svg";
import SortIcon from "src/assets/img/Common/Sidebar/SortIcon.svg"

const Sidebar = () => {
    const { pathname, profileData, handleMenuClick } = useSidebar();
    const { handleLogOutClick } = useLogOut();

    return (
        <S.SidebarContainer>
            <S.InfoWrap>
                <S.Info>
                    <S.LogoWrap>
                        <S.Logo src={Logo}></S.Logo>
                        <S.LogoName>애기야</S.LogoName>
                    </S.LogoWrap>
                    <S.SortWrap>
                        <S.Sort src={SortIcon}></S.Sort>
                    </S.SortWrap>
                </S.Info>
            </S.InfoWrap>
            <S.ContentWrap>
                <S.MenuWrap>
                    <S.MenuTitleWrap>
                        <S.MenuTitle>ADMIN MENU</S.MenuTitle>
                    </S.MenuTitleWrap>
                    {MenuData.map((data) => (
                        <S.MenuBox key={data.id} $isbackground={pathname === data.path}>
                            <S.Menu onClick={()=>handleMenuClick(data.path)}>
                                <S.MenuImg src={data.icon} />
                                <S.MenuName>{data.name}</S.MenuName>
                            </S.Menu>
                        </S.MenuBox>
                    ))}
                </S.MenuWrap>
                <S.LogOutWrap>
                    <S.LogOut onClick={handleLogOutClick}>로그아웃</S.LogOut>
                </S.LogOutWrap>
            </S.ContentWrap>
        </S.SidebarContainer>
    )
}

export default Sidebar;