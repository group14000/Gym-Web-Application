import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef(); // Creating a ref to the form element to access its properties and methods.

  const sendEmail = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior.

    emailjs
      .sendForm(
        "service_tgjkula",
        "template_vtcedym",
        form.current,
        "14tQ6uUUgiw1zmHwv"
      )
      .then(
        (result) => {
          console.log(result.text); // Logging the success response from the email service.
        },
        (error) => {
          console.log(error.text); // Logging any error that occurs during the email sending process.
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        {/* Join form */}
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          {/* Email input */}
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email Address"
          />
          {/* Join Now button */}
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
