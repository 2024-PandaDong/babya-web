import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "src/pages/LoginPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}

export default Router;