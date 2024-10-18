import styled from "styled-components";

export const HeaderBarContainer = styled.div`
    width: 100%;
    min-width: 260px;
    height: 62px;
    
    display: flex;
    justify-content: center;
    background: #FFF;
`

export const HeaderBarWrap = styled.div`
    width: 84%;
    height: 100%;
    
    display: flex;
    justify-content: space-between;
    
    margin-right: 10px;
`

export const MenuTitle = styled.p`
    color: #000;
    font-size: 1.3rem;
    font-family: Pretendard-Medium;
    
    display: flex;
    align-items: center;
`

export const ProfileWrap = styled.div`
    width: auto;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    align-content: center;
`

export const Profile = styled.img`
    width: auto;
    height: 60%;
    
    border-radius: 50%;
    
    cursor: pointer;
`