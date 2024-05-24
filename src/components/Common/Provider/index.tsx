import React, { Fragment } from 'react'
import GlobalStyle from "src/styles/global";
import PageTemplate from "src/components/Common/PageTemplate";
import Router from "src/components/Router/router";

const Provider = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <PageTemplate>
                <Router />
            </PageTemplate>
        </Fragment>
    )
}

export default Provider;