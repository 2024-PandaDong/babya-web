import React from 'react';
import * as S from "./style";
import useBannerWrite from "src/hooks/Banner/useBannerWrite";
import {AreaData} from "src/constants/datas/Banner/AreaData";
import ClickIcon from "src/assets/img/Banner/GroupManagementClickIcon.svg";
import NonClickIcon from "src/assets/img/Banner/GroupManagementNonClickIcon.svg";
import DateIcon from "src/assets/img/Banner/DateIcon.svg";
import FolderIcon from "src/assets/img/Banner/FolderIcon.svg";
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/locale";

const BannerWrite = () => {
    const { ...bannerWrite } = useBannerWrite();

    return (
        <S.BannerWriteBackground>
            <S.GroupManagementWrap>
                <S.GroupManagementTitle>배너 그룹 관리</S.GroupManagementTitle>
                <S.GroupManagement>
                    <S.GroupManagementCategoryWrap>
                        <S.CategoryButtonWrap
                            id="before"
                            $border={bannerWrite.data.type === "1" ? "#BBAFFF": "transparent"}
                            onClick={bannerWrite.handleCategoryChange}>
                            <S.CategoryButtonImg id="before" src={bannerWrite.data.type === "1" ? ClickIcon : NonClickIcon} />
                            <S.CategoryButtonText id="before" $color={bannerWrite.data.type === "1" ? "#BBAFFF": "#D9D9D9"}>
                                출산전 배너 관리
                            </S.CategoryButtonText>
                        </S.CategoryButtonWrap>
                        <S.CategoryButtonWrap
                            id="after"
                            $border={bannerWrite.data.type === "2" ? "#BBAFFF": "transparent"}
                            onClick={bannerWrite.handleCategoryChange}>
                            <S.CategoryButtonImg id="after" src={bannerWrite.data.type === "2" ? ClickIcon : NonClickIcon} />
                            <S.CategoryButtonText id="after" $color={bannerWrite.data.type === "2" ? "#BBAFFF": "#D9D9D9"}>
                                출산후 배너 관리
                            </S.CategoryButtonText>
                        </S.CategoryButtonWrap>
                    </S.GroupManagementCategoryWrap>
                    <S.SaveButtonWrap>
                        <S.SaveButton onClick={bannerWrite.SubmitBannerCreate}>저장하기</S.SaveButton>
                    </S.SaveButtonWrap>
                </S.GroupManagement>
            </S.GroupManagementWrap>
            <S.AreaSelectWrap>
                <S.AreaSelectTitle>배너 지역 선택</S.AreaSelectTitle>
                <S.AreaSelect>
                    <S.NationwideCheckboxWrap>
                        <S.NationwideCheckbox id="Nationwide"></S.NationwideCheckbox>
                        <S.NationwideCheckboxText htmlFor="Nationwide">전체(전국)</S.NationwideCheckboxText>
                    </S.NationwideCheckboxWrap>
                    <S.AreaCheckboxWrap>
                        {AreaData.map((area) => (
                            <S.AreaCheckboxBox key={area.id}>
                                <S.AreaCheckbox id={area.name}></S.AreaCheckbox>
                                <S.AreaCheckboxText htmlFor={area.name}>{area.name}</S.AreaCheckboxText>
                            </S.AreaCheckboxBox>
                        ))}
                    </S.AreaCheckboxWrap>
                </S.AreaSelect>
            </S.AreaSelectWrap>
            <S.BaseSettingWrap>
                <S.BaseSettingTitle>배너 기본 설정</S.BaseSettingTitle>
                <S.BaseSettingBox>
                    <S.BaseSetting>
                        <S.BannerTitleNameWrap>
                            <S.TitleWrap>
                                <S.Title>배너 제목명</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content
                                    id="title"
                                    placeholder="배너 제목을 입력해주세요."
                                    onChange={bannerWrite.handleDataChange}
                                />
                            </S.ContentWrap>
                        </S.BannerTitleNameWrap>
                        <S.BannerSubTitleWrap>
                            <S.TitleWrap>
                                <S.Title>배너 소제목</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content
                                    id="subTitle"
                                    placeholder="배너 소제목을 입력해주세요.(최대 6글자)"
                                    onChange={bannerWrite.handleDataChange}
                                />
                            </S.ContentWrap>
                        </S.BannerSubTitleWrap>
                        <S.BannerSourceWrap>
                            <S.TitleWrap>
                                <S.Title>출처</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content
                                    id="source"
                                    placeholder="배너 출처를 입력해주세요."
                                    onChange={bannerWrite.handleDataChange}
                                />
                            </S.ContentWrap>
                        </S.BannerSourceWrap>
                        <S.BannerLinkWrap>
                            <S.TitleWrap>
                                <S.Title>링크(URL)</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content
                                    id="url"
                                    placeholder="배너 링크(URL)을 입력해주세요."
                                    onChange={bannerWrite.handleDataChange}
                                />
                            </S.ContentWrap>
                        </S.BannerLinkWrap>
                        <S.BannerPeriodWrap>
                            <S.BannerPeriodTitleWrap>
                                <S.BannerPeriodTitle>배너기간</S.BannerPeriodTitle>
                            </S.BannerPeriodTitleWrap>
                            <S.BannerPeriodContentWrap>
                                <S.BannerPeriodContent>
                                    <S.BannerPeriodDate
                                        readOnly
                                        open={bannerWrite.isStartDateOpen}
                                        locale={ko}
                                        selected={bannerWrite.data.startDate}
                                        onChange={(date) => bannerWrite.handleChangeStartDate(date)}
                                        dateFormat="시작일: yyyy.MM.dd"
                                        $margin={bannerWrite.isStartDateOpen ? "-5" : "0"}
                                        $fontColor={bannerWrite.initialDate === bannerWrite.data.startDate ? '#D9D9D9' : '#000'}/>
                                    <S.BannerPeriodDateIcon
                                        src={DateIcon}
                                        onClick={() => bannerWrite.setIsStartDateOpen((prev) => !prev)}/>
                                    <S.BannerPeriodDate
                                        readOnly
                                        open={bannerWrite.isEndDateOpen}
                                        locale={ko}
                                        selected={bannerWrite.data.endDate}
                                        onChange={(date) => bannerWrite.handleChangeEndDate(date)}
                                        dateFormat="마감일: yyyy.MM.dd"
                                        $margin={bannerWrite.isEndDateOpen ? "-5" : "0"}
                                        $fontColor={bannerWrite.initialDate === bannerWrite.data.endDate ? '#D9D9D9' : '#000'}/>
                                    <S.BannerPeriodDateIcon
                                        src={DateIcon}
                                        onClick={() => bannerWrite.setIsEndDateOpen((prev) => !prev)}/>
                                </S.BannerPeriodContent>
                            </S.BannerPeriodContentWrap>
                        </S.BannerPeriodWrap>
                        <S.BannerImageWrap>
                            <S.BannerImageTitleWrap>
                                <S.BannerImageTitle>
                                    사진 <br /> (370px, 200px)
                                </S.BannerImageTitle>
                            </S.BannerImageTitleWrap>
                            {bannerWrite.data.fileUrl
                                ? (<S.BannerImageContentWrap>
                                        <S.BannerImagePreviewWrap>
                                            <S.BannerImagePreview src={bannerWrite.fileImage} />
                                            <S.BannerImagePreviewButtonWrap>
                                                <S.BannerImageChangeButton onClick={bannerWrite.handleFileClick}>사진변경</S.BannerImageChangeButton>
                                                <S.BannerImageDeleteButton onClick={bannerWrite.handleFileDelete}>사진삭제</S.BannerImageDeleteButton>
                                            </S.BannerImagePreviewButtonWrap>
                                        </S.BannerImagePreviewWrap>
                                        <S.BannerImageInputRef ref={bannerWrite.fileInput} accept="image/*" onChange={bannerWrite.handleFileChange} />
                                    </S.BannerImageContentWrap>
                                )
                                : (<S.BannerImageContentWrap>
                                        <S.BannerImageContentBox onClick={bannerWrite.handleFileClick}>
                                            <S.BannerImageContentIcon src={FolderIcon}></S.BannerImageContentIcon>
                                            <S.BannerImageContent>배너사진을 추가 해주세요</S.BannerImageContent>
                                            <S.BannerImageInputRef ref={bannerWrite.fileInput} accept="image/*" onChange={bannerWrite.handleFileChange} />
                                        </S.BannerImageContentBox>
                                    </S.BannerImageContentWrap>
                                )
                            }

                        </S.BannerImageWrap>
                    </S.BaseSetting>
                </S.BaseSettingBox>
            </S.BaseSettingWrap>
        </S.BannerWriteBackground>
    )
}

export default BannerWrite;