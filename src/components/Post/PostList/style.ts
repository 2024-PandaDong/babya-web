import styled from 'styled-components';

export const ListWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    margin-top: 60px;
    overflow-x: auto;
`;

export const TableWrap = styled.div`
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

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        box-shadow: none;
        border-radius: 0;
    }
`;


export const Table = styled.table`
    width: 95%;
    border-collapse: collapse;
    text-align: left;
    margin-top: 50px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ListThead = styled.thead`
    width: 100%;
    height: 50px;
    background: #DBD5FF;
    position: sticky;
    margin-top: 10px;  
    z-index: 10;

    @media (max-width: 768px) {
        display: none;
    }
`;



export const ListTheadTr = styled.tr`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    height: 70px;
    line-height: 50px;
    gap: 235px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const ScrollableTbody = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin-top: -50px; 
`;

export const Tbody = styled.tbody`
    width: 100%;
`;

export const Tr = styled.tr`
    display: flex;
    width: 100%;
    height: 70px;
    flex-direction: row;
    border-bottom: 1px solid #ddd;
    //&:nth-child(even) {
    //    background-color: #f2f2f2;
    //}

    @media (max-width: 768px) {
        display: block;
        margin-bottom: 10px;
    }
`;

export const Td = styled.td`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 8px;
    @media (max-width: 768px) {
        display: block;
        width: 100%;
        padding: 10px 5px;
        border-bottom: none;
        position: relative;
        &::before {
            content: attr(data-label);
            font-weight: bold;
            display: inline-block;
            width: 120px;
        }
    }
`;

export const Message = styled.p`
    font-size: 18px;
    color: #333;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    button#b {
        width: 90px;
        height: 35px;
        color: #000000;
        font-size: 15px;
        //background-color: #7896FF;
        border-radius: 5px;
        border: 1px solid #D9D9D9;
        margin-right: 10px;
    }
    button#r {
        width: 90px;
        height: 35px;
        color: #000000;
        font-size: 15px;
        //background-color: #FF4B4B;
        border-radius: 5px;
        border: 1px solid #D9D9D9;
    }
`;
export const SearchWrap = styled.div`
    display: flex;
    position: relative;
`;

export const SearchInput = styled.input`
    width: 300px;
    height: 50px;
    left: 830px;
    color: #000;
    font-family: Pretendard-Medium, sans-serif;
    border: 1px solid #D9D9D9;
    border-radius: 5px;
    background-color: transparent;
    padding: 0 15px;
    outline: none;
    position: absolute;
    bottom: 320px;
    &::placeholder {
        color: #D9D9D9;
    }
`;
export const BannerSearchButton = styled.button`
    width: 100px;
    height: 50px;
    left: 1140px;
    color: #FFFFFF;
    font-family: Pretendard-Medium, sans-serif;
    border-radius: 5px;
    background-color: #BBAFFF;
    padding: 0 15px;
    position: absolute;
    bottom: 320px;
    font-size: 20px;
`;
export const CategoryFilter = styled.div`
    width: 355px;
    height: 50px;
    left: 350px;
    color: #000000;
    font-family: Pretendard-Medium, sans-serif;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid #D9D9D9;
    padding: 0 15px;
    position: absolute;
    bottom: 770px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    label {
        margin-right: 25px;
    }
`;
