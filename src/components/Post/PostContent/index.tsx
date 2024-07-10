import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { babyaAxios } from "src/libs/axios/CustomAxios";
import { AxiosError } from "axios";
import * as S from "./style";
import { PostContentType } from "src/types/Post/PostContent/PostContent.interface";

const PostContent = () => {
    const { id } = useParams();
    const [postContent, setPostContent] = useState<PostContentType["data"] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchPostContent = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await babyaAxios.get(`/post/${id}`);
            const data = response.data.data;
            setPostContent(data);
        } catch (error) {
            const axiosError = error as AxiosError;
            setError(axiosError);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPostContent();
    }, [id]);

    if (isLoading) {
        return <S.Message>Loading...</S.Message>;
    }
    if (error) {
        return <S.Message>Error loading data: {error.message}</S.Message>;
    }

    if (!postContent) {
        return <S.Message>No post found</S.Message>;
    }

    const isImageFile = (fileName: string) => {
        const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"];
        const extension = fileName.split('.').pop()?.toLowerCase();
        return extension && imageExtensions.includes(extension);
    };

    const renderFiles = () => {
        if (!postContent.files || !Array.isArray(postContent.files)) {
            return null;
        }
        return postContent.files.map((file) => {
            if (!file || !file.name) return null;
            return isImageFile(file.name) ? (
                <S.Image key={file.fileId} src={file.url} alt={file.name} />
            ) : (
                <S.FileLink key={file.fileId} href={file.url} target="_blank">
                    {file.name}
                </S.FileLink>
            );
        });
    };

    return (
        <S.MainWrap>
            <S.mainTitle>게시물 관리</S.mainTitle>
            <S.ListWrap>
                <S.PostWrap>
                    <S.Title>제목: {postContent.title}</S.Title>
                    <S.Details>
                        <S.Category>카테고리: {postContent.category}</S.Category>
                        <S.Date>날짜: {postContent.createdAt}</S.Date>
                    </S.Details>
                    <S.Details>
                        <S.Nickname>이름: {postContent.nickname}</S.Nickname>
                        <span>조회수: {postContent.view} 댓글수: {postContent.commentCnt}</span>
                    </S.Details>
                    <S.Files>
                        {renderFiles()}
                    </S.Files>
                    <S.Content>{postContent.content}</S.Content>
                </S.PostWrap>
            </S.ListWrap>
        </S.MainWrap>
    );
};

export default PostContent;
