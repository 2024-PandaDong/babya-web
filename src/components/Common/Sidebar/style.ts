import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 18%;
    min-width: 255px;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    background: #2C2E3D;
    
    overflow: hidden;
`

export const InfoWrap = styled.div`
    width: 100%;
    height: 62px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #282A39;
`

export const Info = styled.div`
    width: 100%;
    height: 85%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoWrap = styled.div`
    width: 73%;
    height: auto;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    gap: 15px;
`

export const Logo = styled.img`
    width: 32px;
    height: auto;
    
    margin-bottom: 5px;
`

export const LogoName = styled.p`
    color: #FFF;
    font-size: 1.4rem;
    font-family: Pretendard-Medium;
`

export const SortWrap = styled.div`
    width: 40px;
    height: auto;
    
    display: flex;
    justify-content: center;
    align-content: center;
`

export const Sort = styled.img`
    width: 28px;
    height: auto;
    
    cursor: pointer;
`

export const ContentWrap = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const MenuWrap = styled.div`
    width: 100%;
    height: auto;
    
    display: flex;
    flex-direction: column;
    
    gap: 10px;
`

export const MenuTitleWrap = styled.div`
    width: 100%;
    height: 60px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MenuTitle = styled.p`
    color: #FFF;
    font-size: 0.85rem;
    font-family: Pretendard-Medium;
    
    width: 65%;
    height: 90%;
    
    display: flex;
    align-items: flex-end;
`

export const MenuBox = styled.div<{ $isbackground: boolean }>`
    width: 100%;
    height: 65px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    background-color: ${({ $isbackground }) => ($isbackground ? "#4A4E69" : "transparent")};
`

export const Menu = styled.div`
    width: 60%;
    height: 38%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
    cursor: pointer;
    margin-right: 10px;
`

export const MenuImg = styled.img`
    width: 26px;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    margin-right: 45px;
`

export const MenuName = styled.p`
    color: #FFF;
    font-size: 1.1rem;
    font-family: Pretendard-Medium;
    
    white-space: nowrap;
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
    color: #FFF;
    font-size: 1.2rem;
    
    cursor: pointer;
`