import React from 'react';
import * as S from "./style";
import BannerCreateIcon from "src/assets/img/Banner/BannerCreateIcon.svg";
import BannerPost from "src/components/Banner/BannerPost";

const Banner = () => {
    return (
        <S.BannerBackground>
            <S.BannerContainer>
                <S.BannerTitleWrap>
                    <S.BannerTitle>배너 그룹 관리</S.BannerTitle>
                </S.BannerTitleWrap>
                <S.BannerFilterWrap>
                    <S.BannerFilter>
                        <S.BannerFilterTitleWrap>
                            <S.BannerFilterTitle>배너 그룹 필터</S.BannerFilterTitle>
                        </S.BannerFilterTitleWrap>
                        <S.BannerCheckboxContainer>
                            <S.BannerCheckboxWrap>
                                <S.BannerCheckbox id="before"></S.BannerCheckbox>
                                <S.BannerCheckboxText htmlFor="before">출산전 배너</S.BannerCheckboxText>
                            </S.BannerCheckboxWrap>
                            <S.BannerCheckboxWrap>
                                <S.BannerCheckbox id="after"></S.BannerCheckbox>
                                <S.BannerCheckboxText htmlFor="after">출산후 배너</S.BannerCheckboxText>
                            </S.BannerCheckboxWrap>
                        </S.BannerCheckboxContainer>
                        <S.BannerSearchWrap>
                            <S.BannerSearch placeholder="배너를 검색해주세요."></S.BannerSearch>
                            <S.BannerSearchButton>검색</S.BannerSearchButton>
                        </S.BannerSearchWrap>
                    </S.BannerFilter>
                </S.BannerFilterWrap>
                <S.BannerWrap>
                    <S.BannerBox>
                        <S.BannerButtonWrap>
                            <S.BannerAllDeleteButton>전체 삭제</S.BannerAllDeleteButton>
                            <S.BannerCreateButtonWrap>
                                <S.BannerCreateIcon src={BannerCreateIcon}></S.BannerCreateIcon>
                                <S.BannerCreateText>배너 그룹 관리</S.BannerCreateText>
                            </S.BannerCreateButtonWrap>
                        </S.BannerButtonWrap>
                        <BannerPost />
                    </S.BannerBox>
                </S.BannerWrap>
            </S.BannerContainer>
        </S.BannerBackground>
    )
}

export default Banner;