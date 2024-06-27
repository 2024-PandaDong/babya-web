import styled from 'styled-components';

export const ListWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    margin-top: 60px;
`;

export const TableWrap = styled.div`
    width: 94%;
    height: 90%;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

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
    margin-right: 90px;

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
        color: #FFFFFF;
        font-size: 15px;
        background-color: #7896FF;
        border-radius: 5px;
        margin-right: 10px;
    }
    button#r {
        width: 90px;
        height: 35px;
        color: #FFFFFF;
        font-size: 15px;
        background-color: #FF4B4B;
        border-radius: 5px;
    }
`;