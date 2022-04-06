import React from "react";

// pages
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import NotFound from "./pages/NotFound";
// router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
