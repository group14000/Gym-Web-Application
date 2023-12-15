/**
 * The `App` function serves as the main component for the web application, rendering different sections.
 * It imports and integrates components like Hero, Programs, Reasons, Plans, Testimonials, Join, and Footer.
 * @returns {JSX.Element} The App component returns a JSX element representing the entire web application.
 */
import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* Rendering the Hero component */}
      <Hero />
      {/* Rendering the Programs component */}
      <Programs />
      {/* Rendering the Reasons component */}
      <Reasons />
      {/* Rendering the Plans component */}
      <Plans />
      {/* Rendering the Testimonials component */}
      <Testimonials />
      {/* Rendering the Join component */}
      <Join />
      {/* Rendering the Footer component */}
      <Footer />
    </div>
  );
}

export default App;
