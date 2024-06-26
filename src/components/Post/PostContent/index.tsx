import React, { useEffect, useState } from "react";
import { PostType } from "src/types/Post/Post.interface";
import { babyaAxios } from "src/libs/axios/CustomAxios";
import { AxiosError } from "axios";
import * as S from "src/components/Post/PostContent/style";

const PostContent = () => {
    const [postList, setPostList] = useState<PostType["data"][]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchPostList = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await babyaAxios.get("/post/all", {
                params: { page: 1, size: 1000 },
            });

            const data = response.data.data;
            setPostList(data); // 데이터를 설정합니다.
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
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }

    return (
        <S.listWrap>
            <S.tableWrap>
                <Table data={postList} />
            </S.tableWrap>
        </S.listWrap>
    );
};

const Table = ({ data }: { data: PostType["data"][] }) => {
    return (
        <>
            <div className="thead">
                <div className="thread-tr">
                    <div>NO</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>카테고리</div>
                    <div>관리</div>
                </div>
            </div>
            <table className="table">
                <tbody className="tbody">
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.postId}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.nickname}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>데이터가 존재하지 않습니다.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
};

export default PostContent;
