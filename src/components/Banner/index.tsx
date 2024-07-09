import React from 'react';
import * as S from "./style";
import useBanner from "src/hooks/Banner/useBanner";
import {BannerListProps} from "src/types/Banner/Banner.interface";
import BannerCreateIcon from "src/assets/img/Banner/BannerCreateIcon.svg";
import dataTransform from "src/utils/Transform/dataTransform";

const Banner = () => {
    const { ...Banner } = useBanner();

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
                                    readOnly
                                    id="before"
                                    checked={Banner.type === "1"}
                                    onClick={() => Banner.handleChangeType("1")} />
                                <S.BannerCheckboxText htmlFor="before">출산전 배너</S.BannerCheckboxText>
                            </S.BannerCheckboxWrap>
                            <S.BannerCheckboxWrap>
                                <S.BannerCheckbox
                                    readOnly
                                    id="after"
                                    checked={Banner.type === "2"}
                                    onClick={() => Banner.handleChangeType("2")} />
                                <S.BannerCheckboxText htmlFor="after">출산후 배너</S.BannerCheckboxText>
                            </S.BannerCheckboxWrap>
                        </S.BannerCheckboxContainer>
                        <S.BannerSearchWrap>
                            <S.BannerSearch
                                value={Banner.searchValue}
                                placeholder="배너를 검색해주세요."
                                onChange={Banner.handleChangeInputValue}
                                onKeyDown={Banner.handleKeyDown}/>
                            <S.BannerSearchButton onClick={Banner.handleClickFilterBanner}>검색</S.BannerSearchButton>
                        </S.BannerSearchWrap>
                    </S.BannerFilter>
                </S.BannerFilterWrap>
                <S.BannerWrap>
                    <S.BannerBox>
                        <S.BannerButtonWrap>
                            <S.BannerAllDeleteButton>전체 삭제</S.BannerAllDeleteButton>
                            <S.BannerCreateButtonWrap onClick={Banner.handleBannerWriteClick}>
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
                                {(Banner.bannerListFilter.length
                                    ? Banner.bannerListFilter
                                    : Banner.bannerList).map((banner: BannerListProps) => (
                                        <S.Content key={banner.id}>
                                            <S.CheckBoxWrap>
                                                <S.CheckBox></S.CheckBox>
                                            </S.CheckBoxWrap>
                                            <S.Num>{banner.id}</S.Num>
                                            <S.TitleName>{banner.title}</S.TitleName>
                                            <S.Area>{dataTransform.AreaNameTransform(banner.lc)}</S.Area>
                                            <S.Category>{banner.type === "1" ? "출산전" : "출산후"}</S.Category>
                                            <S.ManagementWrap>
                                                <S.ModifyButton onClick={() => Banner.handleBannerModifyClick(banner.id)}>수정</S.ModifyButton>
                                                <S.DisableButton onClick={() => Banner.handleClickDisable(banner.id)}>비활성화</S.DisableButton>
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