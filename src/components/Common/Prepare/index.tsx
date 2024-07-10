import React from "react";
import * as S from "./style";
import PrepareImg from "src/assets/img/Common/Prepare/PrepareImg.svg"

const Prepare = () => {
    return (
        <S.PrepareBackground>
            <S.PrepareContainer>
                <S.PrepareImg src={PrepareImg} ></S.PrepareImg>
                <S.PrepareText>아직 준비 중인 페이지입니다.</S.PrepareText>
            </S.PrepareContainer>
        </S.PrepareBackground>
    )
}

export default Prepare;