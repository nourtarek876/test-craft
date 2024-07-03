import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar1 from "./Navbar";



function Paid() {
  return (
    <>
    <header>
      <Navbar1 />
    </header>

    {/* start pain */}
    <div className="paid-landing">
      <div className="paid-text">
        <h1>No Paid Courses for Now</h1>
        <p>Contact Me if You to Put Your Course Her.</p>
      </div>
    </div>
    {/* end paid */}
    {/* start footer */}
    <div className="footer">
      <div className="copy-write">© 2024 CORSI ALL rights reserved.</div> <div className="developer">NOUR TAREK CODE & DESIGN</div>
      </div>
      {/* end footer */}
    </>
  );
}

export default Paid;