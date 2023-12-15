/* The line `import React from "react";` is importing the React library, which is a JavaScript library
for building user interfaces. It allows you to use React components and other features to create
interactive and dynamic web applications. */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
