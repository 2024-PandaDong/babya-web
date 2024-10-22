import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { babyaAxios } from "src/libs/axios/CustomAxios";
import { CompanyListProps } from "src/types/Company/Company.interface";
import Swal from "sweetalert2";
import { showToast } from "src/libs/toast/Swal";

const useCompany = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [companyList, setCompanyList] = useState<CompanyListProps[]>([]);
    const [companyListFilter, setCompanyListFilter] = useState<CompanyListProps[]>([]);

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
            handleClickFilterCompany();
        }
    };

    const handleClickFilterCompany = () => {
        if (searchValue !== "") {
            const filterData = companyList.filter((item) =>
                item.companyName.toLowerCase().includes(searchValue.toLowerCase())
            );
            setCompanyListFilter(filterData);
        } else {
            setCompanyListFilter([]);
        }
    };

    useEffect(() => {
        const CompanyRead = async () => {
            if (page) {
                try {
                    const res = await babyaAxios.get("/company", {
                        params: {
                            page: page,
                            size: 20,
                        },
                    });

                    const newCompanyList = res.data.data;

                    setIsLoading(newCompanyList.length === 0);
                    setCompanyList((prevCompanyList) => [...prevCompanyList, ...newCompanyList]);
                } catch (error) {
                    console.log(error);
                    setIsLoading(false);
                }
            }
        };

        CompanyRead();
    }, [page]);

    return {
        companyList,
        searchValue,
        companyListFilter,
        handleChangeValue,
        handleKeydown,
        handleClickFilterCompany,
    };
};

export default useCompany;
