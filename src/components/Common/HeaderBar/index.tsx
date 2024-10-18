import React from 'react';
import * as S from "./style"
import BaseProfile from "src/assets/img/Common/Prepare/PrepareImg.svg"
import {useLocation} from "react-router-dom";
import menuPageTransform from "src/utils/Transform/menuPageTransform";

const HeaderBar = () => {
    const { pathname } = useLocation()

    return (
        <S.HeaderBarContainer>
            <S.HeaderBarWrap>
                <S.MenuTitle>{menuPageTransform.PageTransform(pathname)}</S.MenuTitle>
                <S.ProfileWrap>
                    <S.Profile src={BaseProfile}></S.Profile>
                </S.ProfileWrap>
            </S.HeaderBarWrap>
        </S.HeaderBarContainer>
    )
}

export default HeaderBar;