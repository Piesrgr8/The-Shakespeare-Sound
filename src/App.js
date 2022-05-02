import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Episodes from "./pages/Episodes";
import OurMission from "./pages/OurMission";
import ComingSoon from "./pages/ComingSoon";
import Home from "./pages/Home";

import "./App.css";
import Book from "./assets/img/sonnetbook.JPG";
import Footer from "./component/required/Footer";
import Header from "./component/required/Header";
import Ep from "./pages/Ep";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="background">
          <img src={Book} alt="" />
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes/>} />
          <Route path="/episodes/:postslug" element={<Ep />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
