import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import "./App.css";
import Navbar1 from "./Navbar";
import Footer from "./Footer";

function Main() {
    return (
      <div className="App">
        {/* start header */}
        <header>
         <Navbar1 />
        </header>
        {/* end header */}
        {/* start landing */}
        <div className="landing">
          <div class="landing-text">
            <h1>Top Rating</h1>
            <h2>Explore Best Crafts</h2>
          </div>
          <div className="card-main">
            <div className="cards">
              <div className="first-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Ahmed Nour (Furniture)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
              <div className="secound-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Kaled Amr (Pottery)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User2">See More</a>
                  </div>
                </div>
              </div>
              <div className="third-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Omar Ahmed (Copper)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-main">
            <div className="cards">
              <div className="first-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Ahmed Nour (Furniture)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
              <div className="secound-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Kaled Amr (Pottery)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
              <div className="third-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Omar Ahmed (Copper)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end landing */}
        {/* start footer */}
        <Footer />
        {/* end footer */}
      </div>
    );
  }
  
  export default Main;
  