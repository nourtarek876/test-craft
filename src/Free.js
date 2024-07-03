import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar1 from "./Navbar";



function Free() {
  return (
    <>
    <header>
        <Navbar1 />
    </header>
    {/* start free landing */}
    <div className="free-landing">
      <div className="web-dev section-dev">
        <div className="front-end">
          <div className="section-text">
          <h1>Front end Development</h1>
          </div>
        </div>
        <div className="back-end">
        <div className="section-text">
          <h1>Back end Development</h1>
          </div>
        </div>
      </div>
      <div className="mobile-dev section-dev">
      <div className="section-text">
        <h1>Mobile Apps Development</h1>
        </div>
      </div>
      <div className="python section-dev">
      <div className="section-text">
        <h1>Python Learning</h1>
        </div>
      </div>
      <div className="c section-dev">
      <div className="section-text">
        <h1>C Learning</h1>
        </div>
      </div>
      <div className="computer-dev section-dev">
      <div className="section-text">
        <h1>Computer Apps Development</h1>
        </div>
      </div>
      <div className="cypher section-dev">
      <div className="section-text">
        <h1>Cypher Security Learning</h1>
        </div>
      </div>
    </div>
    {/* end free landing */}
    </>
  );
}

export default Free;