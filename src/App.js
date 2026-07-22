import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import "./App.css";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
