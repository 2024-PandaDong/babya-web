import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "src/pages/Auth/page";
import BannerPage from "src/pages/Banner/page";
import BannerWritePage from "src/pages/Banner/Write/page";
import BannerModifyPage from "src/pages/Banner/Modify/page";
import Post from "src/components/Post";
import PostContent from "src/components/Post/PostContent";
import Prepare from "src/components/Common/Prepare";
import QuizPage from "src/pages/Quiz/page";
import QuizWritePage from "src/pages/Quiz/QuizWrite/page";
import Download from "src/components/Common/Download";

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/banner" element={<BannerPage />} />
            <Route path="/banner-write" element={<BannerWritePage />} />
            <Route path="/banner-modify/:id" element={<BannerModifyPage />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:id" element={<PostContent />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/quiz-write" element={<QuizWritePage />} />
            <Route path="/company" element={<Prepare />} />
            <Route path="/" element={<Prepare />} />
            <Route path="/inquiry" element={<Prepare />} />
            <Route path="/download" element={<Download />} />
        </Routes>
    )
}

export default Router;