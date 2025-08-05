import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import { useEffect } from "react";
import {
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiFlask,
  SiHtml5,
  SiPytorch,
  SiOpencv,
  SiReact,
  SiDjango,
  SiPostgresql,
  SiRedux,
} from "react-icons/si";
import { AiFillOpenAI } from "react-icons/ai";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <div className="project-nav">
        <p>
          <a href="#Aiml">AI/ML</a>
        </p>
        <p>
          <a href="#fullstack">FullStack</a>
        </p>
      </div>
      <div className="Projects">
        <div className="project-class" id="Aiml">
          <h2>AI/ML</h2>
          <div className="project-item" data-aos="fade-down">
            <h3>FACE EMOTION DETECTION</h3>
            <p>
              <p>
                Developed a Face Emotion Detection model using Deep Learning and
                Computer Vision techniques. The model is built on a{" "}
                <strong>ResNet-18</strong> architecture implemented with{" "}
                <span className="tool">
                  <SiPytorch /> PyTorch
                </span>
                , trained to classify facial expressions into 7 distinct emotion
                categories. It processes both static images and real-time video
                streams using{" "}
                <span className="tool">
                  <SiOpencv /> OpenCV
                </span>{" "}
                for face detection and frame handling, and{" "}
                <span className="tool">
                  <SiNumpy /> NumPy
                </span>{" "}
                for efficient numerical operations. This project demonstrates
                the application of convolutional neural networks (CNNs) in
                emotion recognition from visual input, suitable for both image
                analysis and live emotion tracking.
              </p>
            </p>

            <a
              href="https://github.com/AbrarAhmed435/Real_Time_Emotion_Detection.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> View GitHub Repo
            </a>

            <img src="emotion.webp" alt="face Scan" />
          </div>
          <div className="project-item" data-aos="fade-down">
            <h3>HEART DISEASE ESTIMATE</h3>
            <p>
              Developed a Heart Disease Prediction web app using Machine
              Learning with Python. The project utilizes a CSV-based dataset and
              leverages libraries like{" "}
              <span className="tool">
                <SiNumpy /> NumPy
              </span>
              ,{" "}
              <span className="tool">
                <SiPandas /> Pandas
              </span>
              , and{" "}
              <span className="tool">
                <SiScikitlearn /> Scikit-learn
              </span>{" "}
              for data preprocessing, feature selection, and model training. The
              trained model is integrated into a{" "}
              <span className="tool">
                <SiFlask /> Flask
              </span>{" "}
              backend, serving predictions via a simple and responsive{" "}
              <span className="tool">
                <SiHtml5 /> HTML
              </span>{" "}
              frontend. This project demonstrates end-to-end ML deployment, from
              data analysis to user interaction.
            </p>

            <a
              href="https://github.com/AbrarAhmed435/Diabetes_Estimation__Model"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> View GitHub Repo
            </a>

            <img src="HEART1.jpg" alt="HEART IMAGE" />
          </div>
          <div className="project-item" data-aos="fade-right">
            <h3>BREAST CANCER ESTIMATION</h3>
            <p>
              Built a Breast Cancer Detection web application using Machine
              Learning with Python. The model was trained on a CSV-based dataset
              and utilizes libraries like{" "}
              <span className="tool">
                <SiNumpy /> NumPy
              </span>
              ,{" "}
              <span className="tool">
                <SiPandas /> Pandas
              </span>
              , and{" "}
              <span className="tool">
                <SiScikitlearn /> Scikit-learn
              </span>{" "}
              for data analysis, preprocessing, and model training. A{" "}
              <span className="tool">
                <SiFlask /> Flask
              </span>{" "}
              backend serves the trained model, while a user-friendly{" "}
              <span className="tool">
                <SiHtml5 /> HTML
              </span>{" "}
              interface allows users to input data and receive predictions. This
              project highlights full-stack ML deployment and practical
              application of classification algorithms in healthcare.
            </p>

            <a
              href="https://github.com/AbrarAhmed435/Breast_Cancer_Diagonosis"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> View GitHub Repo
            </a>

            <img src="BREAST1.jpg" alt="Breast Cancer IMAGE" />
          </div>
          <div className="project-item" data-aos="fade-down">
            <h3>DIABESTES PREDICTION MODEL</h3>
            <p>
              Developed a Diabetes Prediction web application using Machine
              Learning with Python. The model is trained on a CSV dataset
              containing medical indicators and utilizes libraries such as{" "}
              <span className="tool">
                <SiNumpy /> NumPy
              </span>
              ,
              <span className="tool">
                <SiPandas /> Pandas
              </span>
              , and{" "}
              <span className="tool">
                <SiScikitlearn /> Scikit-learn
              </span>{" "}
              for data preprocessing, feature engineering, and model training.
              The prediction system is deployed using a{" "}
              <span className="tool">
                <SiFlask /> Flask
              </span>{" "}
              backend with a simple{" "}
              <span className="tool">
                <SiHtml5 /> HTML
              </span>{" "}
              frontend, allowing users to input health parameters and receive
              instant predictions. This project demonstrates the practical
              application of ML in preventive healthcare and full-stack model
              deployment.
            </p>

            <a
              href="https://github.com/AbrarAhmed435/Breast_Cancer_Diagonosis"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> View GitHub Repo
            </a>

            <img src="diabetes.jpg" alt="Diabatese IMAGE" />
          </div>
          <div className="project-item" data-aos="fade-down">
            <h3>IRIS FLOWER CLASSIFICATION</h3>
            <p>
              Built an Iris Flower Classification web application using a custom
              Neural Network implemented from scratch in{" "}
              <span className="tool">
                <SiPytorch /> PyTorch
              </span>
              . The project uses the well-known Iris dataset and incorporates
              libraries like{" "}
              <span className="tool">
                <SiNumpy /> NumPy
              </span>
              ,
              <span className="tool">
                <SiPandas /> Pandas
              </span>
              , and{" "}
              <span className="tool">
                <SiScikitlearn /> Scikit-learn
              </span>{" "}
              for data preprocessing and visualization. The trained{" "}
              <span className="tool">
                <SiPytorch /> PyTorch
              </span>{" "}
              model is served through a{" "}
              <span className="tool">
                <SiFlask /> Flask
              </span>{" "}
              backend with a simple{" "}
              <span className="tool">
                <SiHtml5 /> HTML
              </span>{" "}
              interface, allowing users to classify flower species based on
              input features. This project showcases hands-on experience with
              neural networks,{" "}
              <span className="tool">
                <SiPytorch /> PyTorch
              </span>{" "}
              fundamentals, and deploying deep learning models in real-world
              applications.
            </p>

            <a
              href="https://github.com/AbrarAhmed435/Iris_Flower_category"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> View GitHub Repo
            </a>

            <img src="iris.jpg" alt="Iris IMAGE" />
          </div>
          <div className="project-item" data-aos="fade-down">
            <h3>HOUSE PRICE PREDICTION MODEL</h3>
            <p>
              Developed a Housing Price Prediction system using Machine Learning
              with Python. The model was trained on a CSV dataset containing
              real estate features like area, number of rooms, and location.
              Libraries such as{" "}
              <span className="tool">
                <SiNumpy /> NumPy
              </span>
              ,{" "}
              <span className="tool">
                <SiPandas /> Pandas
              </span>
              , and{" "}
              <span className="tool">
                <SiScikitlearn /> Scikit-learn
              </span>{" "}
              were used for data preprocessing, feature engineering, and
              regression model training. The application was deployed using{" "}
              <span className="tool">
                <SiFlask /> Flask
              </span>
              , with a clean{" "}
              <span className="tool">
                <SiHtml5 /> HTML
              </span>{" "}
              interface where users can input property details to receive price
              estimates. This project demonstrates regression-based ML,
              real-world data handling, and full-stack model deployment.
            </p>

            <a
              href="https://github.com/AbrarAhmed435/Housing_Price_Prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> View GitHub Repo
            </a>

            <img src="house.jpg" alt="house IMAGE" />
          </div>
          <div className="project-item" data-aos="fade-down">
            <h3>ABALONE AGE PREDICTION</h3>
            <p>
              <p>
                Created an Abalone Age Prediction model using Machine Learning
                to estimate the age of abalones based on physical measurements,
                including the number of shell rings. The dataset was processed
                using{" "}
                <span className="tool">
                  <SiNumpy /> NumPy
                </span>{" "}
                and{" "}
                <span className="tool">
                  <SiPandas /> Pandas
                </span>
                , with{" "}
                <span className="tool">
                  <SiScikitlearn /> Scikit-learn
                </span>{" "}
                employed for feature scaling...
              </p>
            </p>
            <a
              href="https://github.com/AbrarAhmed435/Abalone_Age"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> View GitHub Repo
            </a>

            <img src="abalone.jpg" alt="abalone IMAGE" />
          </div>
        </div>
        <div className="project-class" id="fullstack">
          <h2>FULLSTACK</h2>
          <div className="project-item" data-aos="fade-down">
            <h3>PromptIQ</h3>
            <p>
              Developed <strong>PromptIQ</strong>, an intelligent chatbot web
              application powered by the{" "}
              <span className="tool">
                <AiFillOpenAI />
                GPT-4.0 API
              </span>{" "}
              for natural language understanding and generation. The frontend is
              built with{" "}
              <span className="tool">
                <SiReact /> React
              </span>{" "}
              while the backend uses{" "}
              <span className="tool">
                <SiDjango /> Django
              </span>{" "}
              to manage API communication and chat logic. PromptIQ allows users
              to engage in real-time, context-aware conversations, making it
              suitable for customer support, learning assistants, or personal
              productivity tools. Integrated features include chat history,
              token-based authentication, and a user-friendly interface for
              seamless interaction.
            </p>

            <a
              href="https://github.com/AbrarAhmed435/PromptIQ"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> View GitHub Repo
            </a>

            <img src="chatbot.webp" alt="PromptIQ Chatbot App" />
          </div>

          <div className="project-item" data-aos="fade-down">
            <h3>FocusBoard</h3>
            <p>
              Designed and developed <strong>FocusBoard</strong>, a full-stack
              productivity application aimed at helping users manage tasks and
              maintain focus through an intuitive digital board interface. Built
              using{" "}
              <span className="tool">
                <SiReact /> React
              </span>{" "}
              for the frontend and{" "}
              <span className="tool">
                <SiDjango /> Django
              </span>{" "}
              for the backend, the app enables users to create, update, and
              organize tasks with drag-and-drop functionality. Integrated{" "}
              <span className="tool">
                <SiPostgresql /> PostgreSQL
              </span>{" "}
              for persistent data storage and{" "}
              <span className="tool">
                <SiRedux /> Redux
              </span>{" "}
              for state management, ensuring a smooth and responsive user
              experience. FocusBoard also features smart reminders and progress
              tracking, promoting better time management and daily focus.
            </p>

            <a
              href="https://github.com/AbrarAhmed435/FocusBoard"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> View GitHub Repo
            </a>

            <img src="ask.webp" alt="Task Manager" />
          </div>
          <div className="project-item" data-aos="fade-down">
            <h3>ContentDesk</h3>
            <p>
              Built <strong>ContentDesk</strong>, a full-stack blog publishing
              platform that allows users to create, edit, and manage articles
              through a clean and responsive interface. The frontend is
              developed using{" "}
              <span className="tool">
                <SiReact /> React
              </span>{" "}
              with dynamic routing and state management, while the backend
              leverages{" "}
              <span className="tool">
                <SiDjango /> Django
              </span>{" "}
              for robust RESTful API handling and authentication.{" "}
              <span className="tool">
                <SiPostgresql /> PostgreSQL
              </span>{" "}
              is used for reliable data storage, ensuring fast access to user
              content and blog metadata. ContentDesk supports features like rich
              text editing, user registration/login, post categorization, and a
              fully functional comment system — making it suitable for personal
              blogging or small-scale content platforms.
            </p>

            <a
              href="https://github.com/AbrarAhmed435/ContentDesk"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub /> View GitHub Repo
            </a>

            <img src="blog.avif" alt="ContentDesk Blog App" />
          </div>
        </div>
      </div>
    </div>
  );
}
