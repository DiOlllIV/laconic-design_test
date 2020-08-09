import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Contacts from "./components/Contacts";
import About from "./components/About/AboutSection";

const App = () => {
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
