import React from 'react';
import * as S from './style';

const BannerPost = () => {
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
                {Array.from({ length: 8 }).map((_, i) => (
                    <S.Content>
                        <S.CheckBoxWrap>
                            <S.CheckBox></S.CheckBox>
                        </S.CheckBoxWrap>
                        <S.Num>{i+1}</S.Num>
                        <S.TitleName>여성가족부 저출산정책 변경</S.TitleName>
                        <S.Area>서울특별시</S.Area>
                        <S.Category>출산전</S.Category>
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