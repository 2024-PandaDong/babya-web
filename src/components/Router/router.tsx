import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "src/pages/Auth/page";
import BannerPage from "src/pages/Banner/page";
import BannerWritePage from "src/pages/BannerWrite/page";
import BannerModifyPage from "src/pages/BannerModify/page";
import Post from "src/pages/Post/page";
import PostContent from "src/components/Post/PostContent";
import QuizPage from "src/pages/Quiz/page";
import QuizWritePage from "src/pages/Quiz/QuizWrite/page";
import Prepare from "src/components/Common/Prepare";

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Prepare />} />
            <Route path="/banner" element={<BannerPage />} />
            <Route path="/banner-write" element={<BannerWritePage />} />
            <Route path="/banner-modify/:id" element={<BannerModifyPage />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:id" element={<PostContent />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/quiz-write" element={<QuizWritePage />} />
            <Route path="/company" element={<Prepare />} />
            <Route path="/FAQ" element={<Prepare />} />
            <Route path="/inquiry" element={<Prepare />} />
        </Routes>
    )
}

export default Router;