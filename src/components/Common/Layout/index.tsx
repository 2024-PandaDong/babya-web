import React, { Fragment, ReactNode } from "react";
import { ProviderProps } from "src/components/Common/Provider/type";

const Layout = ({ children }: ProviderProps) => {
    return <Fragment>{children}</Fragment>
}

export default Layout;