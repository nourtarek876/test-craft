import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar1 from "./Navbar";

function Main() {
  return (
    <>
      {/* start header */}
      <header>
        <Navbar1 />
      </header>
      {/* end header */}
      {/* start landing */}
      <div className="landing-page">
        <div className="landing-text">
          <h1>All in One Place</h1>
          <p>All free and Paid Programing courses in one Place</p>
        </div>
        <div className="landing-logos">
          <div className="logo1"></div>
          <div className="logo2"></div>
          <div className="logo3"></div>
          <div className="logo4"></div>
          <div className="logo5"></div>
          <div className="logo6"></div>
          <div className="logo7"></div>
          <div className="logo8"></div>
          <div className="logo9"></div>
          <div className="logo10"></div>
        </div>
      </div>
      {/* end landing */}
      {/* start about */}
      <div className="abouts">
        <div className="about-text">
          <h1>What are We Performing ?</h1>
        </div>
        <div className="about-cards">
          <div className="cra card1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-card"
              viewBox="0 0 640 512"
            >
              <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z" />
            </svg>
            <h2>Easy Learning</h2>
          </div>
          <div className="cra card2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-card"
              viewBox="0 0 512 512"
            >
              <path d="M270.7 9.7C268.2 3.8 262.4 0 256 0s-12.2 3.8-14.7 9.7L197.2 112.6c-3.4 8-5.2 16.5-5.2 25.2v77l-144 84V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v56 32 24c0 13.3 10.7 24 24 24s24-10.7 24-24v-8H192v32.7L133.5 468c-3.5 3-5.5 7.4-5.5 12v16c0 8.8 7.2 16 16 16h96V448c0-8.8 7.2-16 16-16s16 7.2 16 16v64h96c8.8 0 16-7.2 16-16V480c0-4.6-2-9-5.5-12L320 416.7V384H464v8c0 13.3 10.7 24 24 24s24-10.7 24-24V368 336 280c0-13.3-10.7-24-24-24s-24 10.7-24 24v18.8l-144-84v-77c0-8.7-1.8-17.2-5.2-25.2L270.7 9.7z" />
            </svg>
            <h2>Fast Access</h2>
          </div>
          <div className="cra card3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-card"
              viewBox="0 0 640 512"
            >
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
            </svg>
            <h2>Free Learning</h2>
          </div>
          <div className="cra card4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-card"
              viewBox="0 0 448 512"
            >
              <path d="M192 64v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32zM82.7 207c-15.3 8.8-20.5 28.4-11.7 43.7l32 55.4c8.8 15.3 28.4 20.5 43.7 11.7l55.4-32c15.3-8.8 20.5-28.4 11.7-43.7l-32-55.4c-8.8-15.3-28.4-20.5-43.7-11.7L82.7 207zM288 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H288zm64 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H352zM160 384v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zM32 352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32H32z" />
            </svg>
            <h2>Best Videos</h2>
          </div>
        </div>
      </div>
      {/* end about */}
      {/* start servesice */}
      <div className="services">
        <div className="services-text">
          <h1>Top Rated</h1>
        </div>
        <div className="services-cards">
          <div className="services-card">
            <h2>Intro In HTML & CSS</h2>
            <p>Instructor: Elzero Web School</p>
            <p>Learn the basics of HTML and CSS.</p>
            <a href="https://www.youtube.com/watch?v=4OGWPn-Q__I">Watch Now</a>
          </div>
          <div className="services-card">
            <h2>Intro To Python</h2>
            <p>Instructor: Codzilla</p>
            <p>
              Get started with Python, one of the most popular programing
              languages for data scince.
            </p>
            <a href="https://www.youtube.com/watch?v=h3VCQjyaLws&list=PLuXY3ddo_8nzrO74UeZQVZOb5-wIS6krJ">
              Watch Now
            </a>
          </div>
          <div className="services-card nth-3">
            <h2>JavaScript Essentials</h2>
            <p>Instructor: Abdelrahman Gamal</p>
            <p>
              Understand the fundamentals of JavaScript and how to use it in web
              development
            </p>
            <a href="https://www.youtube.com/watch?v=PWuTLTFMtYw&list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE">
              Watch Now
            </a>
          </div>
          <div className="services-card">
            <h2>Flutter basics</h2> <p>Instructor: Ammar Alkatib</p>
            <p>Learn the basics of Flutter mobile application</p>
            <a href="https://www.youtube.com/watch?v=lRercKJaAes&list=PLw6Y5u47CYq47oDw63bMqkq06fjuoK_GJ">
              Watch Now
            </a>
          </div>
        </div>
        <a href="/Free"><h3>See All Videos</h3></a>
      </div>
      {/* end servesice */}
      {/* start footer */}
      <div className="footer">
        <div className="copy-write">© 2024 CORSI ALL rights reserved.</div>
        <div className="developer">NOUR TAREK CODE & DESIGN</div>
      </div>
      {/* end footer */}
    </>
  );
}

export default Main;
