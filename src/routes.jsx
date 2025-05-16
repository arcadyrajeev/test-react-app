// routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Works from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/works" element={<Works />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contacts" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
