import React from "react";
import Main from "../components/sections/Main";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <React.Fragment>
      <Main />
      <About />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}
