import React, { useMemo } from "react";
import * as S from "./style";
import useMember from "src/hooks/Member/useMember";
import SearchIcon from "src/assets/img/Common/SearchIcon.svg";
import { MemberListProps } from "src/types/Member/Member.interface";

interface MemberListItemProps {
    item: MemberListProps;
    handleClickPatch: (email: string, currentState: string) => Promise<void>;
    formatDate: (dateString: string) => string;
}

const MemberListItem: React.FC<MemberListItemProps> = React.memo(({
         item,
         handleClickPatch,
         formatDate
}) => {
    return (
        <S.MemberList key={item.email}>
            <S.NameWrap>{item.nickname}</S.NameWrap>
            <S.EmailWrap>
                <S.Email>{item.email}</S.Email>
            </S.EmailWrap>
            <S.StateWrap>{item.state}</S.StateWrap>
            <S.CreateDateWrap>{formatDate(item.createdAt)}</S.CreateDateWrap>
            <S.ManagementWrap>
                <S.BtnWrap>
                    <S.PatchBtn onClick={() => handleClickPatch(item.email, item.state)}>
                        상태변경
                    </S.PatchBtn>
                </S.BtnWrap>
            </S.ManagementWrap>
        </S.MemberList>
    );
});

const Member = () => {
    const {
        memberList,
        memberListFilter,
        searchValue,
        handleChangeValue,
        handleKeydown,
        handleClickPatch,
    } = useMember();

    const formatDate = useMemo(() => {
        return (dateString: string) => {
            const date = new Date(dateString);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}년${month}월${day}일`;
        };
    }, []);

    const displayList = useMemo(() => {
        return (memberListFilter.length ? memberListFilter : memberList);
    }, [memberListFilter, memberList]);

    return (
        <S.MemberBackground>
            <S.MemberContainer>
                <S.MemberTitleWrap>
                    <S.MemberTitle>회원 관리</S.MemberTitle>
                </S.MemberTitleWrap>
                <S.MemberWrap>
                    <S.Member>
                        <S.OptionWrap>
                            <S.MemberSearchWrap>
                                <S.MemberSearchImg
                                    src={SearchIcon}
                                    loading="lazy"
                                />
                                <S.MemberSearch
                                    value={searchValue}
                                    placeholder="원하는 회원정보를 입력해주세요"
                                    onChange={handleChangeValue}
                                    onKeyDown={handleKeydown}
                                />
                            </S.MemberSearchWrap>
                        </S.OptionWrap>
                        <S.MemberListWrap>
                            <S.MemberListTitle>
                                <S.NameWrap>닉네임</S.NameWrap>
                                <S.EmailWrap>
                                    <S.Email>이메일</S.Email>
                                </S.EmailWrap>
                                <S.StateWrap>활성화여부</S.StateWrap>
                                <S.CreateDateWrap>만든 날짜</S.CreateDateWrap>
                                <S.ManagementWrap>관리</S.ManagementWrap>
                            </S.MemberListTitle>
                            <S.MemberListBox>
                                {displayList.map((item) => (
                                    <MemberListItem
                                        key={item.email}
                                        item={item}
                                        handleClickPatch={handleClickPatch}
                                        formatDate={formatDate}
                                    />
                                ))}
                                <div id="observer" style={{ minHeight: "10px" }}></div>
                            </S.MemberListBox>
                        </S.MemberListWrap>
                    </S.Member>
                </S.MemberWrap>
            </S.MemberContainer>
        </S.MemberBackground>
    );
}

export default Member;
