import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaGithubSquare } from "react-icons/fa";
import { useEffect } from "react";


/* https://michalsnik.github.io/aos/ */
export default function Home() {
  useEffect(() => {
  AOS.init({
    duration: 500, // Animation duration in ms
    once: false,     // Whether animation should happen only once
  });
}, []);

  return (
    <div className="Home">
      <div className="outer-container">
        <div className="container">
          {/* https://undraw.co/illustrations */}
          <img
            src="../public/undraw_coding_joxb.svg"
            alt=""
            className="passport"
          />
          <div className="box">
            {/* <h2 className="typewriter">
              Hi👋, I am Abrar
              <br /> IT UNDERGRADUATE
            </h2> */}
            <h2 style={{ color: "white", fontSize: "2rem" }}>Hi, I am Abrar</h2>
            <h3 className="history-title">
              I am an IT Student &{" "}
              <span style={{ color: "#00ffff", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "Web Explorer",
                    "AI Enthusiast",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h3>
            <a
              href="https://github.com/AbrarAhmed435/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
                fontSize: "1.5rem",
                marginTop: "1rem",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              check out my github profile{" "}
              <FaGithubSquare style={{ verticalAlign: "middle" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="history">
        <h3 className="skill-heading">My Skills</h3>
        <div className="skills">
          <div className="skill-box">
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="icons8-c (2).svg" alt="" />
              <p>C</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="icons8-c.svg" alt="" />
              <p>C++</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="icons8-python.svg" alt="" />
              <p>python</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="icons8-javascript.svg" alt="" />
              <p>JavaScript</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="react-svgrepo-com.svg" alt="" />
              <p>React</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="django-svgrepo-com.svg" alt="" />
              <p>Django</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="html-5-svgrepo-com.svg" alt="" />
              <p>HTML</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="icons8-css.svg" alt="" />
              <p>CSS</p>
            </div>

            {/* Add more skill cards here */}
          </div>
        </div>

        <div className="brief-history" data-aos="zoom-in">
          <h2 style={{ textDecoration: "underline" }}>
            Brief History About Me
            <br />
            <br />
          </h2>
          <p style={{ fontSize: "1.2rem" }}>
            From writing my first “Hello World” in C++ to developing full-stack
            websites and ML models, I’ve always been driven by the urge to
            create and learn. I'm currently focused on full-stack development
            and AI applications.
            <Link to="/about" className="knowmore">
              {" "}
              Know more
            </Link>
          </p>
        </div>
        <div className="brief-project" data-aos="zoom-in">
          <h2 style={{ textDecoration: "underline" }}>
            My Projects
            <br />
            <br />
          </h2>
          <p style={{ fontSize: "1.2rem" }}>
            Projects building is something which is love to do whether it's Full
            Stack of AI i have dived deep into both.
            <Link to="/projects" className="knowmore">
              {" "}
              Know more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
