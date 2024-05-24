import React, {ReactNode} from "react";
import styled from "styled-components";
import { ProviderProps } from "src/components/Common/Provider/type";
import {useLocation} from "react-router-dom";
import Layout from "src/components/Common/Layout";

const PageTemplate = ({children}: ProviderProps) => {
    // const { pathName } = useLocation();
    return (
        <Container>
            <Layout>{children}</Layout>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    user-select: none;
`

export default PageTemplate;