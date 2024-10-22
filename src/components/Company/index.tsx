import React from "react";
import * as S from "./style";
import useCompany from "src/hooks/Company/useCompany";
import SearchIcon from "src/assets/img/Common/SearchIcon.svg";

const Company = () => {
    const { ...company } = useCompany();

    return (
        <S.CompanyBackground>
            <S.CompanyContainer>
                <S.CompanyTitleWrap>
                    <S.CompanyTitle>회사 관리</S.CompanyTitle>
                </S.CompanyTitleWrap>
                <S.CompanyWrap>
                    <S.Company>
                        <S.OptionWrap>
                            <S.CompanySearchWrap>
                                <S.CompanySearchImg src={SearchIcon} alt="Search Icon" />
                                <S.CompanySearch
                                    value={company.searchValue}
                                    placeholder="원하는 회사를 입력해주세요"
                                    onChange={company.handleChangeValue}
                                    onKeyDown={company.handleKeydown}
                                />
                            </S.CompanySearchWrap>
                        </S.OptionWrap>
                        <S.CompanyListWrap>
                            <S.CompanyListTitle>
                                <S.NumWrap>회사ID</S.NumWrap>
                                <S.QuestionsWrap>
                                    <S.Question>이름</S.Question>
                                </S.QuestionsWrap>
                                <S.AnswerWrap>주소</S.AnswerWrap>
                                <S.CreateDateWrap>회사로고</S.CreateDateWrap>
                                <S.ManagementWrap>관리</S.ManagementWrap>
                            </S.CompanyListTitle>
                            <S.CompanyListBox>
                                {(company.companyListFilter.length
                                    ? company.companyListFilter
                                    : company.companyList).map((item) => (
                                    <S.CompanyList key={item.companyId}>
                                        <S.NumWrap>{item.companyId}</S.NumWrap>
                                        <S.QuestionsWrap>
                                            <S.Question>{item.companyName}</S.Question>
                                        </S.QuestionsWrap>
                                        <S.AnswerWrap>{item.address}</S.AnswerWrap>
                                        <S.CreateDateWrap>
                                            {item.logoImg ? (
                                                <img src={item.logoImg} alt={`${item.companyName} 로고`} style={{ width: '50px', height: '50px' }} />
                                            ) : (
                                                "미존재"
                                            )}
                                        </S.CreateDateWrap>
                                        <S.ManagementWrap>
                                            <S.BtnWrap>
                                                <S.ReadBtn>조회</S.ReadBtn>
                                                <S.PatchBtn>수정</S.PatchBtn>
                                            </S.BtnWrap>
                                        </S.ManagementWrap>
                                    </S.CompanyList>
                                ))}
                                <div id="observer" style={{ minHeight: "10px" }}></div>
                            </S.CompanyListBox>
                        </S.CompanyListWrap>
                    </S.Company>
                </S.CompanyWrap>
            </S.CompanyContainer>
        </S.CompanyBackground>
    );
};

export default Company;
