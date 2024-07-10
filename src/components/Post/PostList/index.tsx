import React, { useEffect, useState } from "react";
import { PostType } from "src/types/Post/Post.interface";
import { babyaAxios, babyaAxiosSetAccessToken } from "src/libs/axios/CustomAxios";
import { AxiosError } from "axios";
import * as S from "src/components/Post/PostList/style";

const PostList = () => {
    const [postList, setPostList] = useState<PostType["data"][]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

    const fetchPostList = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await babyaAxios.get("/post/all", {
                params: { page: 1, size: 1000 },
            });

            const data = response.data.data;
            setPostList(data);
            console.log("API Response Data:", data);
            console.log("성공");
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error("실패", axiosError);
            setError(axiosError);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPostList();
    }, []);

    const getCategoryName = (categoryId: number | string) => {
        const id = Number(categoryId);
        switch (id) {
            case 1:
                return "공유";
            case 2:
                return "질문";
            case 3:
                return "일상";
            default:
                return "알 수 없음";
        }
    };

    const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleCategoryChange = (categoryId: number) => {
        setSelectedCategories((prevSelectedCategories) =>
            prevSelectedCategories.includes(categoryId)
                ? prevSelectedCategories.filter((id) => id !== categoryId)
                : [...prevSelectedCategories, categoryId]
        );
    };

    const handleTogglePostState = async (postId: string, currentState: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const newState = currentState === "ACTIVATE" ? "DEACTIVATE" : "ACTIVATE";
            await babyaAxios.delete(`/post/${postId}`);
            setPostList((prevPostList) =>
                prevPostList.map((post) =>
                    post.postId === postId ? { ...post, state: newState } : post
                )
            );
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error("실패", axiosError);
            setError(axiosError);
        } finally {
            setIsLoading(false);
        }
    };


    const filteredPosts = postList.filter((post) => {
        const categoryName = getCategoryName(post.category).toLowerCase();
        const matchesSearchTerm =
            post.title.toLowerCase().includes(searchTerm) ||
            post.nickname.toLowerCase().includes(searchTerm) ||
            categoryName.includes(searchTerm);
        const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(Number(post.category));

        return matchesSearchTerm && matchesCategory;
    });

    if (isLoading) {
        return <S.Message>Loading...</S.Message>;
    }
    if (error) {
        return <S.Message>Error loading data: {error.message}</S.Message>;
    }

    return (
        <S.ListWrap>
            <S.SearchWrap>
                <S.SearchInput
                    type="text"
                    placeholder="제목, 작성자 또는 카테고리 검색"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
                <S.BannerSearchButton>검색</S.BannerSearchButton>
            </S.SearchWrap>
            <S.CategoryFilter>
                <label>
                    카테고리:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(1)}
                        onChange={() => handleCategoryChange(1)}
                    />
                    공유
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(2)}
                        onChange={() => handleCategoryChange(2)}
                    />
                    질문
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedCategories.includes(3)}
                        onChange={() => handleCategoryChange(3)}
                    />
                    일상
                </label>
            </S.CategoryFilter>
            <S.TableWrap>
                <S.Table>
                    <S.ListThead>
                        <S.ListTheadTr>
                            <div>번호</div>
                            <div>제목</div>
                            <div>작성자</div>
                            <div>카테고리</div>
                            <div>관리</div>
                        </S.ListTheadTr>
                    </S.ListThead>
                </S.Table>
                <S.ScrollableTbody>
                    <S.Table>
                        <S.Tbody>
                            {filteredPosts.map((item, index) => (
                                <S.Tr key={index}>
                                    <S.Td>{item.postId}</S.Td>
                                    <S.Td>{item.title}</S.Td>
                                    <S.Td>{item.nickname}</S.Td>
                                    <S.Td>{getCategoryName(item.category)}</S.Td>
                                    <S.Buttons>
                                        <button id="b">조회</button>
                                        <button
                                            id="r"
                                            onClick={() => handleTogglePostState(item.postId, item.state)}
                                        >
                                            {item.state === "ACTIVATE" ? "비활성화" : "활성화"}
                                        </button>
                                    </S.Buttons>
                                </S.Tr>
                            ))}
                        </S.Tbody>
                    </S.Table>
                </S.ScrollableTbody>
            </S.TableWrap>
        </S.ListWrap>
    );
};

export default PostList;
