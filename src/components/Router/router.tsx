import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "src/styles/global";
import LoginPage from "src/pages/LoginPage";

const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            <Routes>
        </BrowserRouter>
    )
}

export default Router;