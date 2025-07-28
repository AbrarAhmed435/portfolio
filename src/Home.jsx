import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaGithubSquare } from "react-icons/fa";
import { useEffect } from "react";

/* https://michalsnik.github.io/aos/ */
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="Home">
      <div className="outer-container">
        <div className="container">
          {/* Use image path correctly */}
          <img src="/undraw_coding_joxb.svg" alt="Coding Illustration" />
        </div>
        <div className="box">
          <h2 className="heading">Hi, I am Abrar</h2>
          <h3 className="introduction">
            I am an IT Student &{" "}
            <span className="highlighted">
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
            className="github-link"
          >
            check out my github profile{" "}
            <FaGithubSquare style={{ verticalAlign: "middle" }} />
          </a>
        </div>
      </div>
      <h3 className="skill-heading">My Skills</h3>
      <div className="skills">
        <div className="skill-class" data-aos="fade-down">
          <h4>FRONTEND</h4>
          <div className="skill-box">
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="icons8-javascript.svg" alt="" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="react-svgrepo-com.svg" alt="" />
              <p>REACT</p>
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
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="tailwind-svgrepo-com.svg" alt="" />
              <p>TAILWIND</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="bootstrap-svgrepo-com.svg" alt="" />
              <p>BOOTSTRAP</p>
            </div>
          </div>
        </div>
        <div className="skill-class" data-aos="fade-down">
          <h4>BACKEND</h4>
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
              <img src="django-svgrepo-com.svg" alt="" />
              <p>Django</p>
            </div>
          </div>
        </div>
        <div className="skill-class" data-aos="fade-down">
          <h4>DATABASES</h4>
          <div className="skill-box">
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="redux-logo-svgrepo-com.svg" alt="" />
              <p>REDUX</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="database-svgrepo-com.svg" alt="" />
              <p>SQL</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="mongo-svgrepo-com.svg" alt="" />
              <p>MONGODB</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="elephant (1).svg" alt="" />
              <p>POSTGRESQL</p>
            </div>
          </div>
        </div>
        <div className="skill-class" data-aos="fade-down">
          <h4>AI/Ml</h4>
          <div className="skill-box">
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="numpy-svgrepo-com.svg" alt="" />
              <p>NUMPY</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="pandas-svgrepo-com.svg" alt="" />
              <p>PANDAS</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="icons8-matplotlib.svg" alt="" />
              <p>MATPLOTLIB</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="pytorch-svgrepo-com.svg" alt="" />
              <p>PYTORCH</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="scikit-learn-logo-small.svg" alt="" />
              <p>SCIKIT LEARN</p>
            </div>
          </div>
        </div>
        <div className="skill-class" data-aos="fade-down">
          <h4>TOOLS AND IDEs</h4>
          <div className="skill-box">
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="vscode3-svgrepo-com.svg" alt="" />
              <p>VSCODE</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="icons8-jupyter.svg" alt="" />
              <p>
                JUPYTER<br></br>NOTEBOOK
              </p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="colabs.svg" alt="" />
              <p>
                GOOGLE
                <br />
                COLABS
              </p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="icons8-code-blocks.svg" alt="" />
              <p>CODE::BLOCKS</p>
            </div>
          </div>
        </div>
        <div className="skill-class" data-aos="fade-down">
          <h4>VERSION CONTROL AND API</h4>
          <div className="skill-box">
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="git-merge-svgrepo-com.svg" alt="" />
              <p>GIT</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="github-svgrepo-com.svg" alt="" />
              <p>GITHUB</p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="hug2.svg" alt="" />
              <p>
                HUGGING <br />
                FACE
              </p>
            </div>
            <div className="skill-element" data-aos="fade-down">
              {/*  <FaReact color="#61dafb" size={40} /> */}
              <img src="thunder4.svg" alt="" />
              <p>THUNDER CLIENT</p>
            </div>
          </div>
        </div>
        {/* Add more skill cards here */}
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
      <div className="brief-history" data-aos="zoom-in">
        <h2 style={{ textDecoration: "underline" }}>
          Brief History About Me
          <br />
          <br />
        </h2>
        <p style={{ fontSize: "1.2rem" }}>
          From writing my first “Hello World” in C++ to developing full-stack
          websites and ML models, I’ve always been driven by the urge to create
          and learn. I'm currently focused on full-stack development and AI
          applications.
          <Link to="/about" className="knowmore">
            {" "}
            Know more
          </Link>
        </p>
      </div>

      {/* </div> */}
    </div>
  );
}
