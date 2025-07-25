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
} from "react-icons/si";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="Projects">
      <div className="project-class">
        <h2>AI/ML</h2>
        <div className="project-item" data-aos="fade-down">
          <h3>HEART DISEASE ESTIMATE</h3>
          <p>
            Developed a Heart Disease Prediction web app using Machine Learning
            with Python. The project utilizes a CSV-based dataset and leverages
            libraries like{" "}
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
            🔗 View GitHub Repo
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
            🔗 View GitHub Repo
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
            for data preprocessing, feature engineering, and model training. The
            prediction system is deployed using a{" "}
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
            🔗 View GitHub Repo
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
            interface, allowing users to classify flower species based on input
            features. This project showcases hands-on experience with neural
            networks,{" "}
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
            🔗 View GitHub Repo
          </a>

          <img src="iris.jpg" alt="Iris IMAGE" />
        </div>
        <div className="project-item" data-aos="fade-down">
          <h3>HOUSE PRICE PREDICTION MODEL</h3>
          <p>
            Developed a Housing Price Prediction system using Machine Learning
            with Python. The model was trained on a CSV dataset containing real
            estate features like area, number of rooms, and location. Libraries
            such as{" "}
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
            estimates. This project demonstrates regression-based ML, real-world
            data handling, and full-stack model deployment.
          </p>

          <a
            href="https://github.com/AbrarAhmed435/Housing_Price_Prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View GitHub Repo
          </a>

          <img src="HOUSE.jpg" alt="house IMAGE" />
        </div>
        <div className="project-item" data-aos="fade-down">
          <h3>ABALONE AGE PREDICTION</h3>
          <p>
            <p>
              Created an Abalone Age Prediction model using Machine Learning to
              estimate the age of abalones based on physical measurements,
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
            🔗 View GitHub Repo
          </a>

          <img src="abalone.jpg" alt="abalone IMAGE" />
        </div>
      </div>
    </div>
  );
}
