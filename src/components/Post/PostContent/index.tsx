import React, { useEffect, useState } from "react";
import { PostType } from "src/types/Post/Post.interface";
import { babyaAxios } from "src/libs/axios/CustomAxios";
import { AxiosError } from "axios";
import * as S from "src/components/Post/PostContent/style";

const PostContent = () => {
    const [postList, setPostList] = useState<PostType["data"][]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchPostList = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await babyaAxios.get("/post/all", {
                params: { page: 1, size: 1000 },
            });

            const data = response.data.data;
            setPostList(data);
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

    if (isLoading) {
        return <S.Message>Loading...</S.Message>;
    }
    if (error) {
        return <S.Message>Error loading data: {error.message}</S.Message>;
    }

    return (
        <S.ListWrap>
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
                    <S.Tbody>
                        {postList.map((item, index) => (
                            <S.Tr key={index}>
                                <S.Td>{item.postId}</S.Td>
                                <S.Td>{item.title}</S.Td>
                                <S.Td>{item.nickname}</S.Td>
                                <S.Td>{item.category}</S.Td>
                                <S.Buttons>
                                    <button id="b">조회</button>
                                    <button id="r">삭제</button>
                                </S.Buttons>
                            </S.Tr>
                        ))}
                    </S.Tbody>
                </S.Table>
            </S.TableWrap>
        </S.ListWrap>
    );
};

export default PostContent;
