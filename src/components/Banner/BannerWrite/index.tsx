import React, {useRef, useState} from 'react';
import * as S from "./style";
import {AreaData} from "src/constants/datas/Banner/AreaData";
import ClickIcon from "src/assets/img/Banner/GroupManagementClickIcon.svg";
import NonClickIcon from "src/assets/img/Banner/GroupManagementNonClickIcon.svg";
import DateIcon from "src/assets/img/Banner/DateIcon.svg";
import FolderIcon from "src/assets/img/Banner/FolderIcon.svg";
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/locale";
import {BannerImageChangeButton, BannerImagePreviewButtonWrap} from "./style";

const BannerWrite = () => {
    const initialDate = new Date();
    const fileInput = useRef(null);
    const [imageFile, setImageFile] = useState<string>("");
    const [isStartDateOpen, setIsStartDateOpen] = React.useState(false);
    const [isEndDateOpen, setIsEndDateOpen] = React.useState(false);
    const [startDate, setStartDate] = useState(initialDate);
    const [endDate, setEndDate] = useState(initialDate);

    const handleChangeStartDate = (date) => {
        setStartDate(date);
        setIsStartDateOpen(false);
    }

    const handleChangeEndDate = (date) => {
        setEndDate(date);
        setIsEndDateOpen(false);
    }

    const handleFileClick = () => {
        fileInput.current.click();
    }

    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
        const file = e.target.files?.[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (typeof reader.result === "string") {
                setImageFile(reader.result);
            }
        }
    }

    const handleFileDelete = () => {
        setImageFile("");
    }

    return (
        <S.BannerWriteBackground>
            <S.GroupManagementWrap>
                <S.GroupManagementTitle>배너 그룹 관리</S.GroupManagementTitle>
                <S.GroupManagement>
                    <S.GroupManagementMenuWrap>
                        <S.BeforeButtonWrap>
                            <S.BeforeButtonImg src={ClickIcon}></S.BeforeButtonImg>
                            <S.BeforeButtonText>출산전 배너 관리</S.BeforeButtonText>
                        </S.BeforeButtonWrap>
                        <S.AfterButtonWrap>
                            <S.AfterButtonImg src={NonClickIcon}></S.AfterButtonImg>
                            <S.AfterButtonText>출산후 배너 관리</S.AfterButtonText>
                        </S.AfterButtonWrap>
                    </S.GroupManagementMenuWrap>
                    <S.SaveButtonWrap>
                        <S.SaveButton>저장하기</S.SaveButton>
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
                                <S.Content placeholder="배너 제목을 입력해주세요."></S.Content>
                            </S.ContentWrap>
                        </S.BannerTitleNameWrap>
                        <S.BannerSubTitleWrap>
                            <S.TitleWrap>
                                <S.Title>배너 소제목</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content placeholder="배너 소제목을 입력해주세요.(최대 6글자)"></S.Content>
                            </S.ContentWrap>
                        </S.BannerSubTitleWrap>
                        <S.BannerSourceWrap>
                            <S.TitleWrap>
                                <S.Title>출처</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content placeholder="배너 출처를 입력해주세요."></S.Content>
                            </S.ContentWrap>
                        </S.BannerSourceWrap>
                        <S.BannerLinkWrap>
                            <S.TitleWrap>
                                <S.Title>링크(URL)</S.Title>
                            </S.TitleWrap>
                            <S.ContentWrap>
                                <S.Content placeholder="배너 링크(URL)을 입력해주세요."></S.Content>
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
                                        open={isStartDateOpen}
                                        locale={ko}
                                        selected={startDate}
                                        onChange={(date) => handleChangeStartDate(date)}
                                        dateFormat="시작일: yyyy.MM.dd"
                                        $fontColor={initialDate === startDate ? '#D9D9D9' : '#000'}/>
                                    <S.BannerPeriodDateIcon
                                        src={DateIcon}
                                        onClick={() => setIsStartDateOpen((prev) => !prev)}/>
                                    <S.BannerPeriodDate
                                        readOnly
                                        open={isEndDateOpen}
                                        locale={ko}
                                        selected={endDate}
                                        onChange={(date) => handleChangeEndDate(date)}
                                        dateFormat="마감일: yyyy.MM.dd"
                                        $fontColor={initialDate === endDate ? '#D9D9D9' : '#000'}/>
                                    <S.BannerPeriodDateIcon
                                        src={DateIcon}
                                        onClick={() => setIsEndDateOpen((prev) => !prev)}/>
                                </S.BannerPeriodContent>
                            </S.BannerPeriodContentWrap>
                        </S.BannerPeriodWrap>
                        <S.BannerImageWrap>
                            <S.BannerImageTitleWrap>
                                <S.BannerImageTitle>
                                    사진 <br /> (370px, 200px)
                                </S.BannerImageTitle>
                            </S.BannerImageTitleWrap>
                            {imageFile
                                ? (<S.BannerImageContentWrap>
                                        <S.BannerImagePreviewWrap>
                                            <S.BannerImagePreview src={imageFile} />
                                            <S.BannerImagePreviewButtonWrap>
                                                <S.BannerImageChangeButton onClick={handleFileClick}>사진변경</S.BannerImageChangeButton>
                                                <S.BannerImageDeleteButton onClick={handleFileDelete}>사진삭제</S.BannerImageDeleteButton>
                                            </S.BannerImagePreviewButtonWrap>
                                        </S.BannerImagePreviewWrap>
                                        <S.BannerImageInputRef ref={fileInput} accept="image/*" onChange={handleFileChange} />
                                    </S.BannerImageContentWrap>
                                )
                                : (<S.BannerImageContentWrap>
                                        <S.BannerImageContentBox onClick={handleFileClick}>
                                            <S.BannerImageContentIcon src={FolderIcon}></S.BannerImageContentIcon>
                                            <S.BannerImageContent>배너사진을 추가 해주세요</S.BannerImageContent>
                                            <S.BannerImageInputRef ref={fileInput} accept="image/*" onChange={handleFileChange} />
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