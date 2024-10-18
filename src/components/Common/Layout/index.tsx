import React from "react";
import styled from "styled-components";
import { ProviderProps } from "src/components/Common/Provider/type";
import {useLocation} from "react-router-dom";
import HeaderBar from "src/components/Common/HeaderBar";

const Layout = ({ children }: ProviderProps) => {
    const { pathname } = useLocation();

    return (
        <Container>
            {pathname !== "/login" && <HeaderBar />}
            {children}
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    user-select: none;
`

export default Layout;