import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
