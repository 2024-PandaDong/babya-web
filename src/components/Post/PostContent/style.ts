import styled from 'styled-components';

export const MainWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #DBD5FF;
`;

export const mainTitle = styled.span`
    position: relative;
    top: 60px;
    left: 60px;
    font-size: 30px;
`;

export const ListWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    margin-top: 60px;
    overflow-x: auto;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    height: auto;
    display: block;
    margin-bottom: 1rem;
`;
export const PostWrap = styled.div`
    width: 94%;
    height: 90%;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    padding-top: 50px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 20px;
    font-size: 16px;
    color: #666;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        font-size: 14px;
    }
`;

export const Category = styled.span`
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin-right: 10px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Nickname = styled.span`
    font-size: 16px;
    color: #333;
    margin-right: 10px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Date = styled.span`
    font-size: 16px;
    color: #999;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Content = styled.p`
    width: 90%;
    font-size: 18px;
    line-height: 1.6;
    color: #333;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Files = styled.div`
    width: 90%;
    margin-top: 20px;
    display: flex;
`;

export const FileLink = styled.a`
    font-size: 16px;
    color: #1e90ff;
    text-decoration: none;
    margin-bottom: 10px;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Message = styled.p`
    font-size: 18px;
    color: #333;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;
export const CommentWrap = styled.div`
    margin-top: 50px;
    width: 100%; 
    margin-left: 130px;
`;

export const CommentsTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
    text-align: left; 
`;


export const Comment = styled.li`
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    width: 100%;
    &:last-child {
        border-bottom: none;
    }
    text-align: left; 
`;

export const CommentNickname = styled.span`
    font-weight: bold;
    display: block; 
`;

export const CommentContent = styled.p`
    margin-top: 5px;
    display: block; 
`;

export const CommentDate = styled.span`
    font-style: italic;
    font-size: 12px;
    display: block; 
`;