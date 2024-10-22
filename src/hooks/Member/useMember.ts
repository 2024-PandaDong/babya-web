import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {babyaAxios} from "src/libs/axios/CustomAxios";
import { MemberListProps } from "src/types/Member/Member.interface";
import Swal from "sweetalert2";
import axios from 'axios';
import {showToast} from "src/libs/toast/Swal";

const useMember = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [memberList, setMemberList] = useState<MemberListProps[]>([]);
    const [memberListFilter, setMemberListFilter] = useState<MemberListProps[]>([]);

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
            setIsLoading(true);
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0,
        });

        const observerTarget = document.getElementById("observer");

        if (observerTarget) {
            observer.observe(observerTarget);
        }

        return () => {
            if (observerTarget) {
                observer.unobserve(observerTarget);
            }
        };
    }, [isLoading]);


    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleClickFilterMember();
        }
    };

    const handleClickFilterMember = () => {
        if (searchValue !== "") {
            const filterData = memberList.filter((item) =>
                item.nickname.toLowerCase().includes(searchValue.toLowerCase())
            );
            setMemberListFilter(filterData);
        } else {
            setMemberListFilter([]);
        }
    };

    const handleClickPatch = async (email: string, currentState: boolean) => {
        const newState = !currentState;

        try {
            const response = await babyaAxios.patch(`/member/status/${email}/${currentState ? 'false' : 'true'}`);
            if (response.status === 200) {
                showToast("회원 상태가 성공적으로 변경되었습니다.", "success");

                setMemberList((prevList) =>
                    prevList.map((member) =>
                        member.email === email ? { ...member, state: newState } : member
                    )
                );
            } else {
                showToast("회원 상태 변경에 실패했습니다.", "error");
            }
        } catch (error) {
            console.error(error);
            if (axios.isAxiosError(error) && error.response) {
                if (error.response.status === 404) {
                    showToast("해당 회원을 찾을 수 없습니다.", "error");
                } else {
                    showToast("회원 상태 변경에 실패했습니다.", "error");
                }
            } else {
                showToast("오류가 발생했습니다. 다시 시도해 주세요.", "error");
            }
        }
    };

    useEffect(() => {
        const MemberRead = async () => {
            if (page) {
                try {
                    const res = await babyaAxios.get("/member", {
                        params: {
                            page: page,
                            size: 20,
                        },
                    });

                    const newMemberList = res.data.data;

                    setIsLoading(newMemberList.length === 0);
                    setMemberList((prevMemberList) => [...prevMemberList, ...newMemberList]);
                } catch (error) {
                    console.log(error);
                    setIsLoading(false);
                }
            }
        };

        MemberRead();
    }, [page]);

    return {
        memberList,
        searchValue,
        memberListFilter,
        handleChangeValue,
        handleKeydown,
        handleClickFilterMember,
        handleClickPatch,
    };
};

export default useMember;
