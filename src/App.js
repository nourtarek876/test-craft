// src/App.js

import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Main from "./Main";
import User1 from "./User1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Free from "./Free";
import Paid from "./Paid";
import Contact from "./Contact";


function App() {
  return (
    <header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/User1" element={<User1 />} />
          <Route path="/Free" element={<Free />} />
          <Route path="/Paid" element={<Paid />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
