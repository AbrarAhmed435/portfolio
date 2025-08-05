import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
      const [connect, setConnect] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yuksq0h",     // e.g., service_xxxxxx
        "template_08qgu2n",    // e.g., template_yyyyyy
        e.target,
        "8HM4FgnXk4wELugEt"      // e.g., XyzABC123456
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset(); // Clear the form
          setConnect(true)
        },
        (error) => {
          alert("Something went wrong, please try again.");
          console.error(error);
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

      <button type="submit">Send</button>
      {connect?<p style={{color:'green'}}>✅Congratulations we are friends now</p>:null}
    </form>
    </div>
  );
};


export default ContactForm;
