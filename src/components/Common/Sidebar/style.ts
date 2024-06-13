import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 18%;
    min-width: 265px;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    background: #F7F2FF;
`

export const InfoWrap = styled.div`
    width: 100%;
    height: 33%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Info = styled.div`
    width: 70%;
    height: 85%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const LogoWrap = styled.div`
    width: 100%;
    height: auto;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    column-gap: 30px;
`

export const Logo = styled.img`
    width: 40px;
    height: auto;
`

export const LogoName = styled.p`
    color: #000;
    font-size: 1.8rem;
    font-family: Pretendard-Medium;
`

export const Profile = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
`

export const ProfileName = styled.p`
    color: #000;
    font-size: 1.4rem;
    font-family: Pretendard-Bold;
`

export const MenuWrap = styled.div`
    width: 100%;
    height: auto;
`

export const MenuBox = styled.div<{ $isbackground: string }>`
    width: 100%;
    height: 70px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    background-color: ${({ $isbackground }) => ($isbackground)};
`

export const Menu = styled.div`
    width: 50%;
    height: 40%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    cursor: pointer;
`

export const MenuImg = styled.img`
    width: 28px;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const MenuName = styled.p`
    color: black;
    font-size: 1.3rem;
    font-family: Pretendard-Medium;
`

export const LogOutWrap = styled.div`
    width: 100%;
    height: 8%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const LogOut = styled.button`
    color: #757575;
    font-size: 1.2rem;
    
    cursor: pointer;
`