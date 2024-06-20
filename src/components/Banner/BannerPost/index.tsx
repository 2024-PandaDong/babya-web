import React from 'react';
import * as S from './style';
import useBanner from "src/hooks/Banner/useBanner";

const BannerPost = () => {
    const {bannerList} = useBanner();

    return (
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
                        <S.Area>서울 특별시</S.Area>
                        <S.Category>{banner.type === "1" ? "출산전" : "출산후"}</S.Category>
                        <S.ManagementWrap>
                            <S.ModifyButton>수정</S.ModifyButton>
                            <S.DisableButton>비활성화</S.DisableButton>
                        </S.ManagementWrap>
                    </S.Content>
              ))}
            </S.ContentWrap>
        </S.Container>
    )
}

export default BannerPost;