import { FaHistory } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {Typewriter} from 'react-simple-typewriter'; 

export default function Home() {
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
            <h2 className="typewriter">
              Hi👋, I am Abrar
              <br /> IT UNDERGRADUATE
            </h2>
          </div>
        </div>
      </div>
      <div className="history">
        {/* <h3 className="history-title">
          
        </h3> */}
        <h3 className="history-title">
          I am an IT Student &{" "}
          <span style={{color:'#00ffff',fontWeight:'bold'}}>
            <Typewriter
            words={['Full Stack Developer','Web Explorer','AI Enthusiast']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            />
          </span>
        </h3>
        <div className="brief-history">
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
      </div>
    </div>
  );
}
