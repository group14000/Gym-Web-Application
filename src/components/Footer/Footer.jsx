/* This code is defining a React functional component called `Footer`. */
import React from "react"; // Importing the React library for creating React components.
import "./Footer.css"; // Importing the CSS file for styling the Footer component.
import GitHub from "../../assets/github.png"; // Importing the GitHub logo image.
import Instagram from "../../assets/instagram.png"; // Importing the Instagram logo image.
import LinkedIn from "../../assets/linkedin.png"; // Importing the LinkedIn logo image.
import Logo from "../../assets/logo.png"; // Importing the main logo image.

const Footer = () => {
  // Declaring a functional component named Footer.
  return (
    <div className="footer-container">
      {" "}
      {/* Creating a container div with the class "footer-container". */}
      <hr /> {/* Adding a horizontal line (separator). */}
      <div className="footer">
        {" "}
        {/* Creating a div with the class "footer". */}
        <div className="social-links">
          {" "}
          {/* Creating a div with the class "social-links". */}
          <img src={GitHub} alt="" /> {/* Displaying the GitHub logo image. */}
          <img src={Instagram} alt="" />{" "}
          {/* Displaying the Instagram logo image. */}
          <img src={LinkedIn} alt="" />{" "}
          {/* Displaying the LinkedIn logo image. */}
        </div>
        <div className="logo-f">
          {" "}
          {/* Creating a div with the class "logo-f". */}
          <img src={Logo} alt="" /> {/* Displaying the main logo image. */}
        </div>
      </div>
      <div className="blur blur-f-1"></div>{" "}
      {/* Creating a div with the class "blur blur-f-1". */}
      <div className="blur blur-f-2"></div>{" "}
      {/* Creating a div with the class "blur blur-f-2". */}
    </div>
  );
};

export default Footer; // Exporting the Footer component for use in other parts of the application.
