import PostContent from "src/components/Post/PostContent";
import React from "react";
import * as S from "src/components/Post/style";

const Post = () => {
    return (
        <S.postWrap>
            <S.mainTitle>게시물 관리</S.mainTitle>
            <PostContent />
        </S.postWrap>
    )
};

export default Post;
