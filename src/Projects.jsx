import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import { useEffect } from "react";

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
        <div className="project-item" data-aos='fade-down'>
          <h3>HEART DISEASE ESTIMATE</h3>
          <p>
            Developed a Heart Disease Prediction web app using Machine Learning
            with Python. The project utilizes a CSV-based dataset and leverages
            libraries like NumPy, Pandas, and Scikit-learn for data
            preprocessing, feature selection, and model training. The trained
            model is integrated into a Flask backend, serving predictions via a
            simple and responsive HTML frontend. This project demonstrates
            end-to-end ML deployment, from data analysis to user interaction.
          </p>
          <a
            href="https://github.com/AbrarAhmed435/Diabetes_Estimation__Model"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View GitHub Repo
          </a>

          <img src="HEART4.jpg" alt="HEART IMAGE" />
        </div>
        <div className="project-item" data-aos='fade-right'>
          <h3>BREAST CANCER ESTIMATION</h3>
          <p>
            Built a Breast Cancer Detection web application using Machine Learning with Python. The model was trained on a CSV-based dataset and utilizes libraries like NumPy, Pandas, and Scikit-learn for data analysis, preprocessing, and model training. A Flask backend serves the trained model, while a user-friendly HTML interface allows users to input data and receive predictions. This project highlights full-stack ML deployment and practical application of classification algorithms in healthcare
          </p>
          <a
            href="https://github.com/AbrarAhmed435/Breast_Cancer_Diagonosis"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View GitHub Repo
          </a>

          <img src="BREAST1.jpg" alt="HEART IMAGE" />
        </div>
        <div className="project-item" data-aos="fade-down">
          <h3>DIABESTES PREDICTION MODEL</h3>
          <p>
            Developed a Diabetes Prediction web application using Machine Learning with Python. The model is trained on a CSV dataset containing medical indicators and utilizes libraries such as NumPy, Pandas, and Scikit-learn for data preprocessing, feature engineering, and model training. The prediction system is deployed using a Flask backend with a simple HTML frontend, allowing users to input health parameters and receive instant predictions. This project demonstrates the practical application of ML in preventive healthcare and full-stack model deployment
          </p>
          <a
            href="https://github.com/AbrarAhmed435/Breast_Cancer_Diagonosis"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View GitHub Repo
          </a>

          <img src="diabetes.jpg" alt="HEART IMAGE" />
        </div>
        <div className="project-item" data-aos="fade-down">
          <h3>IRIS FLOWER CLASSIFICATION</h3>
          <p>
            Built an Iris Flower Classification web application using a custom Neural Network implemented from scratch in PyTorch. The project uses the well-known Iris dataset and incorporates libraries like NumPy, Pandas, and Scikit-learn for data preprocessing and visualization. The trained PyTorch model is served through a Flask backend with a simple HTML interface, allowing users to classify flower species based on input features. This project showcases hands-on experience with neural networks, PyTorch fundamentals, and deploying deep learning models in real-world applications.
          </p>
          <a
            href="https://github.com/AbrarAhmed435/Iris_Flower_category"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View GitHub Repo
          </a>

          <img src="iris.jpg" alt="HEART IMAGE" />
        </div>
        <div className="project-item" data-aos="fade-down">
          <h3>HOUSE PRICE PREDICTION MODEL</h3>
          <p>
            Developed a Housing Price Prediction system using Machine Learning with Python. The model was trained on a CSV dataset containing real estate features like area, number of rooms, and location. Libraries such as NumPy, Pandas, and Scikit-learn were used for data preprocessing, feature engineering, and regression model training. The application was deployed using Flask, with a clean HTML interface where users can input property details to receive price estimates. This project demonstrates regression-based ML, real-world data handling, and full-stack model deployment.
          </p>
          <a
            href="https://github.com/AbrarAhmed435/Housing_Price_Prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 View GitHub Repo
          </a>

          <img src="HOUSE.jpg" alt="HEART IMAGE" />
        </div>
      </div>
    </div>
  );
}
