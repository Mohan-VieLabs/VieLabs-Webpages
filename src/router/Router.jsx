import React from "react";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import CareersPage from "../pages/CareersPage";
import DownloadsPage from "../pages/DownloadsPage";
import AboutPage from "../pages/AboutPage";
import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to={"home"} replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="downloads" element={<DownloadsPage />} />
        <Route path="aboutus" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
