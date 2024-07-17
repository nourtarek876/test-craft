// src/App.js

import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Main from "./Main";
import User1 from "./User1";
import User2 from "./User2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paid from "./Paid";
import Contact from "./Contact";
import Footer from "./Footer";
import Special from "./Special";


function App() {
  return (
    <header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/User1" element={<User1 />} />
          <Route path="/User2" element={<User2 />} />
          <Route path="/Paid" element={<Paid />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Special" element={<Special />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
