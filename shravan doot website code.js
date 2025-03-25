import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Timeline } from "./pages/Timeline";
import { Competitions } from "./pages/Competitions";
import { Features } from "./pages/Features";
import { FAQ } from "./pages/FAQ";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { AdminPanel } from "./pages/AdminPanel";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
