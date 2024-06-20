import React from 'react';
import * as S from "./style";
import useBanner from "src/hooks/Banner/useBanner";
import BannerCreateIcon from "src/assets/img/Banner/BannerCreateIcon.svg";
import dataTransform from "src/utils/Transform/dataTransform";

const Banner = () => {
    const {type, bannerList, handleChangeType, handleClickDisable, handleBannerWriteClick} = useBanner();

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
                                <S.BannerCheckbox
                                    id="before"
                                    checked={type === "1"}
                                    onClick={() => handleChangeType("1")} />
                                <S.BannerCheckboxText htmlFor="before">출산전 배너</S.BannerCheckboxText>
                            </S.BannerCheckboxWrap>
                            <S.BannerCheckboxWrap>
                                <S.BannerCheckbox
                                    id="after"
                                    checked={type === "2"}
                                    onClick={() => handleChangeType("2")} />
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
                            <S.BannerCreateButtonWrap onClick={handleBannerWriteClick}>
                                <S.BannerCreateIcon src={BannerCreateIcon}></S.BannerCreateIcon>
                                <S.BannerCreateText>배너 그룹 관리</S.BannerCreateText>
                            </S.BannerCreateButtonWrap>
                        </S.BannerButtonWrap>
                        {/* <BannerPost> */}
                        <S.Container>
                            <S.TitleWrap>
                                <S.CheckBoxWrap>
                                    <S.CheckBox></S.CheckBox>
                                </S.CheckBoxWrap>
                                <S.Num>NO</S.Num>
                                <S.TitleName>제목명</S.TitleName>
                                <S.Area>지역</S.Area>
                                <S.Category>카테고리</S.Category>
                                <S.ManagementWrap>
                                    <S.Management>관리</S.Management>
                                </S.ManagementWrap>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                {bannerList.map((banner, i) => (
                                    <S.Content key={banner.id}>
                                        <S.CheckBoxWrap>
                                            <S.CheckBox></S.CheckBox>
                                        </S.CheckBoxWrap>
                                        <S.Num>{i+1}</S.Num>
                                        <S.TitleName>{banner.title}</S.TitleName>
                                        <S.Area>{dataTransform.AreaTypeDataTransform(banner.lc)}</S.Area>
                                        <S.Category>{banner.type === "1" ? "출산전" : "출산후"}</S.Category>
                                        <S.ManagementWrap>
                                            <S.ModifyButton>수정</S.ModifyButton>
                                            <S.DisableButton onClick={() => handleClickDisable(banner.id)}>비활성화</S.DisableButton>
                                        </S.ManagementWrap>
                                    </S.Content>
                                ))}
                            </S.ContentWrap>
                        </S.Container>
                        {/* </BannerPost> */}
                    </S.BannerBox>
                </S.BannerWrap>
            </S.BannerContainer>
        </S.BannerBackground>
    )
}

export default Banner;