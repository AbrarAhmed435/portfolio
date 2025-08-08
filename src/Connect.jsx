import React from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const ContactForm = () => {
      const [connect, setConnect] = useState(false);
      const [send,setSend]=useState("Send")
  const sendEmail = (e) => {
    e.preventDefault();
    setSend("Connecting...");


    emailjs
      .sendForm(
        "service_yuksq0h",     // e.g., service_xxxxxx
        "template_08qgu2n",    // e.g., template_yyyyyy
        e.target,
        "8HM4FgnXk4wELugEt"      // e.g., XyzABC123456
      )
      .then(
        (result) => {
          toast.success("You are now connected")
        
          e.target.reset(); // Clear the form
          setConnect(true)
          setSend("Send")
        },
        (error) => {
          alert("Something went wrong, please try again.");
          toast.error("Something Went wrong😓")
          console.error(error);
          setSend("Send")
        }
      );
      
  };

  return (
    <div className="Connect">
    <form onSubmit={sendEmail} className="contact-form">
      <label>Name:</label>
      <input type="text" name="name" required />

      <label>Company:</label>
      <input type="text" name="company" required />

      <label>Email:</label>
      <input type="email" name="email" required />

      <button type="submit">{send}</button>
      {connect?<p style={{color:'green'}}>✅Congratulations we are friends now</p>:null}
    </form>
    <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};


export default ContactForm;
