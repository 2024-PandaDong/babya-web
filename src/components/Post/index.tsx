import PostList from "src/components/Post/PostList";
import React from "react";
import * as S from "src/components/Post/style";

const Post = () => {
    return (
        <S.postWrap>
            <S.mainTitle>게시물 관리</S.mainTitle>
            <PostList />
        </S.postWrap>
    )
};

export default Post;
