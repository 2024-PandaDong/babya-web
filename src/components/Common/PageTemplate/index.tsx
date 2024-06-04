import React from "react";
import styled from "styled-components";
import { ProviderProps } from "src/components/Common/Provider/type";
import {useLocation} from "react-router-dom";
import Sidebar from "src/components/Common/Sidebar";
import Layout from "src/components/Common/Layout";

const PageTemplate = ({children}: ProviderProps) => {
    const { pathname } = useLocation();

    return (
        <Container>
            {pathname !== "/login" && <Sidebar />}
            <Layout>{children}</Layout>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    user-select: none;
`

export default PageTemplate;