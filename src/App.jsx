import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Contacts from "./components/Contacts";
import About from "./components/About/AboutSection";

import readWindowSize from "./readWindowSize";


const App = () => {
  console.log(readWindowSize())
  return (
    <>
      <Header />
      <Main />
      <Contacts />
      <About />
    </>
  );
}
export default App;
