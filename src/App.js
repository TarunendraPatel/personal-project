import React from "react";
import Intro from "./components/intro";
import "./app.scss";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/content";
import Blogs from "./components/blog";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Intro />
      <Skills />
      <Portfolio />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
