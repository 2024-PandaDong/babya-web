import React from 'react';
import * as S from "./style";
import useBannerWrite from "src/hooks/Banner/useBannerWrite";
import {AreaData} from "src/constants/datas/Banner/AreaData";
import ClickIcon from "src/assets/img/Banner/GroupManagementClickIcon.svg";
import NonClickIcon from "src/assets/img/Banner/GroupManagementNonClickIcon.svg";
import DateIcon from "src/assets/img/Banner/DateIcon.svg";
import FolderIcon from "src/assets/img/Banner/FolderIcon.svg";
import 'react-datepicker/dist/react-datepicker.css';
import { format } from "date-fns";
import { ko } from "date-fns/locale";

const BannerWrite = () => {
    const { ...BannerWrite } = useBannerWrite();

    return (
        <S.BannerWriteBackground>
            <S.GroupManagementWrap>
                <S.GroupManagementTitle>배너 그룹 관리</S.GroupManagementTitle>
                <S.GroupManagement>
                    <S.GroupManagementCategoryWrap>
                        <S.CategoryButtonWrap
                            id="before"
                            $border={BannerWrite.data.type === "1"}
                            onClick={BannerWrite.handleChangeCategory}>
                            <S.CategoryButtonImg id="before" src={BannerWrite.data.type === "1" ? ClickIcon : NonClickIcon} />
                            <S.CategoryButtonText id="before" $color={BannerWrite.data.type === "1"}>
                                출산전 배너 관리
                            </S.CategoryButtonText>
                        </S.CategoryButtonWrap>
                        <S.CategoryButtonWrap
                            id="after"
                            $border={BannerWrite.data.type === "2"}
                            onClick={BannerWrite.handleChangeCategory}>
                            <S.CategoryButtonImg id="after" src={BannerWrite.data.type === "2" ? ClickIcon : NonClickIcon} />
                            <S.CategoryButtonText id="after" $color={BannerWrite.data.type === "2"}>
                                출산후 배너 관리
                            </S.CategoryButtonText>
                        </S.CategoryButtonWrap>
                    </S.GroupManagementCategoryWrap>
                    <S.SaveButtonWrap>
                        <S.SaveButton onClick={BannerWrite.SubmitBannerCreate}>저장하기</S.SaveButton>
                    </S.SaveButtonWrap>
                </S.GroupManagement>
            </S.GroupManagementWrap>
            <S.AreaSelectWrap>
                <S.AreaSelectTitle>배너 지역 선택</S.AreaSelectTitle>
                <S.AreaSelect>
                    <S.NationwideCheckboxWrap>
                        <S.NationwideCheckbox
                            id="Nationwide"
                            checked={BannerWrite.isChecked["전국"]}
                            onClick={() => BannerWrite.handleChangeArea("전국", "00")}></S.NationwideCheckbox>
                        <S.NationwideCheckboxText htmlFor="Nationwide">전체(전국)</S.NationwideCheckboxText>
                    </S.NationwideCheckboxWrap>
                    <S.AreaCheckboxContainer>
                        {AreaData.map((area) => (
                            <S.AreaCheckboxWrap key={area.id}>
                                <S.AreaCheckbox
                                    id={area.name}
                                    checked={BannerWrite.isChecked[area.name]}
                                    onClick={() => BannerWrite.handleChangeArea(area.name, area.code)}></S.AreaCheckbox>
                                <S.AreaCheckboxText htmlFor={area.name}>{area.name}</S.AreaCheckboxText>
                            </S.AreaCheckboxWrap>
                        ))}
                    </S.AreaCheckboxContainer>
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
                                <S.Content id="title" placeholder="배너 제목을 입력해주세요." onChange={BannerWrite.handleChangeData} />
                            </S.ContentWrap>
                        </S.BannerTitleNameWrap>
                        <S.BannerSubTitleWrap>
                            <S.TitleWrap>
                                <S.Title>배너 소제목</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content id="subTitle" placeholder="배너 소제목을 입력해주세요.(최대 6글자)" onChange={BannerWrite.handleChangeData} />
                            </S.ContentWrap>
                        </S.BannerSubTitleWrap>
                        <S.BannerSourceWrap>
                            <S.TitleWrap>
                                <S.Title>출처</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content id="source" placeholder="배너 출처를 입력해주세요." onChange={BannerWrite.handleChangeData} />
                            </S.ContentWrap>
                        </S.BannerSourceWrap>
                        <S.BannerLinkWrap>
                            <S.TitleWrap>
                                <S.Title>링크(URL)</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content id="url" placeholder="배너 링크(URL)을 입력해주세요." onChange={BannerWrite.handleChangeData} />
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
                                        locale={ko}
                                        dateFormat="시작일: yyyy.MM.dd"
                                        open={BannerWrite.isStartDateOpen}
                                        selected={BannerWrite.data.startDate}
                                        $style={BannerWrite.isStartDateOpen}
                                        onChange={(date: Date) => {
                                            const startDate = format(date, 'yyyy-MM-dd')
                                            BannerWrite.handleChangeStartDate(startDate)}}/>
                                    <S.BannerPeriodDateIcon src={DateIcon} onClick={() => BannerWrite.setIsStartDateOpen((prev) => !prev)}/>
                                    <S.BannerPeriodDate
                                        readOnly
                                        locale={ko}
                                        dateFormat="마감일: yyyy.MM.dd"
                                        open={BannerWrite.isEndDateOpen}
                                        selected={BannerWrite.data.endDate}
                                        $style={BannerWrite.isEndDateOpen}
                                        onChange={(date: Date) => {
                                            const endDate = format(date, 'yyyy-MM-dd')
                                            BannerWrite.handleChangeEndDate(endDate)}}/>
                                    <S.BannerPeriodDateIcon src={DateIcon} onClick={() => BannerWrite.setIsEndDateOpen((prev) => !prev)}/>
                                </S.BannerPeriodContent>
                            </S.BannerPeriodContentWrap>
                        </S.BannerPeriodWrap>
                        <S.BannerImageWrap>
                            <S.BannerImageTitleWrap>
                                <S.BannerImageTitle>
                                    사진 <br /> (370px, 200px)
                                </S.BannerImageTitle>
                            </S.BannerImageTitleWrap>
                            {BannerWrite.data.fileUrl
                                ? (<S.BannerImageContentWrap>
                                        <S.BannerImagePreviewWrap>
                                            <S.BannerImagePreview src={BannerWrite.fileImage} />
                                            <S.BannerImagePreviewButtonWrap>
                                                <S.BannerImageChangeButton onClick={BannerWrite.handleFileClick}>사진변경</S.BannerImageChangeButton>
                                                <S.BannerImageDeleteButton onClick={BannerWrite.handleFileDelete}>사진삭제</S.BannerImageDeleteButton>
                                            </S.BannerImagePreviewButtonWrap>
                                        </S.BannerImagePreviewWrap>
                                        <S.BannerImageInputRef ref={BannerWrite.fileRef} accept="image/*" onChange={BannerWrite.handleFileChange} />
                                    </S.BannerImageContentWrap>
                                )
                                : (<S.BannerImageContentWrap>
                                        <S.BannerImageContentBox onClick={BannerWrite.handleFileClick}>
                                            <S.BannerImageContentIcon src={FolderIcon}></S.BannerImageContentIcon>
                                            <S.BannerImageContent>배너사진을 추가 해주세요</S.BannerImageContent>
                                            <S.BannerImageInputRef ref={BannerWrite.fileRef} accept="image/*" onChange={BannerWrite.handleFileChange} />
                                        </S.BannerImageContentBox>
                                    </S.BannerImageContentWrap>
                                )}
                        </S.BannerImageWrap>
                    </S.BaseSetting>
                </S.BaseSettingBox>
            </S.BaseSettingWrap>
        </S.BannerWriteBackground>
    )
}

export default BannerWrite;