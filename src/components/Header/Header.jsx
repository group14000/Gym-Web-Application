/* The code is defining a functional component called `Header` in JavaScript React. */
import React, { useState, useEffect } from "react"; // Importing React, the useState and useEffect hooks from the React library.
import "./Header.css"; // Importing the CSS file for styling the Header component.
import Logo from "../../assets/logo.png"; // Importing the main logo image.
import Bars from "../../assets/bars.png"; // Importing the bars icon image.
import { Link } from "react-scroll"; // Importing the Link component from the react-scroll library.

const Header = () => { // Declaring a functional component named Header.
  const [mobile, setMobile] = useState(window.innerWidth <= 768); // Using the useState hook to manage the state of whether the site is being viewed on a mobile device.
  const [menuOpened, setMenuOpened] = useState(false); // Using the useState hook to manage the state of the menu, initialized as closed.

  useEffect(() => { // Using the useEffect hook to update the mobile state when the window is resized.
    const handleResize = () => setMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header"> {/* Creating a div with the class "header". */}
      <img src={Logo} alt="" className="logo" /> {/* Displaying the main logo image with the class "logo". */}
      {menuOpened === false && mobile === true ? ( /* Conditional rendering: If the menu is closed and the site is viewed on a mobile device */
        <div
          style={{
            backgroundColor: "var(--appColor)", // Styling the background color.
            padding: "0.5rem", // Adding padding.
            borderRadius: "5px" // Adding border radius for styling.
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }} // Styling the bars icon.
          />
        </div>
      ) : (
        <ul className="header-menu"> {/* If the menu is open or the site is not viewed on a mobile device, display the menu as an unordered list. */}
          <li>
            <Link
              onClick={() => setMenuOpened(false)} // Click event to close the menu.
              activeClass="active" // Class for the active link.
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header; // Exporting the Header component for use in other parts of the application.
