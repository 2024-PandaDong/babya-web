import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "src/pages/LoginPage";
import BannerPage from "src/pages/BannerPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/banner" element={<BannerPage />} />
        </Routes>
    )
}

export default Router;