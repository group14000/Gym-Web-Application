import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  // Setting up motion transition properties
  const transition = { type: "spring", duration: 3 };
  // Checking if the window width is less than or equal to 768 pixels to determine if the site is being viewed on a mobile device.
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best ad */}
        <div className="the-best-ad">
          {/* Framer Motion animation for the ad */}
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Here we will help you shape and build your ideal body and live
              your life to the fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              {/* CountUp component for animating the coach count */}
              <CountUp end={150} start={100} duration={4} suffix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              {/* CountUp component for animating the members count */}
              <CountUp end={1000} start={800} duration={4} suffix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              {/* CountUp component for animating the fitness programs count */}
              <CountUp end={50} start={0} duration={4} suffix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Hero buttons */}
        <div className="hero-buttons">
          {/* Correcting the spelling of "buttons" to "button" */}
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        {/* Button for joining now */}
        <button className="btn">Join Now</button>
        {/* Framer Motion animation for the heart rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* Hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
