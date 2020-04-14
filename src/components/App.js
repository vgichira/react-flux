import React from "react";
import HomePage from "./Homepage";
import About from "./About";
import Header from "./common/Header";
import Courses from "./Courses";

function App() {
  function getPath() {
    const route = window.location.pathname;

    if (route === "/about") {
      return <About />;
    }

    if (route === "/courses") {
      return <Courses />;
    }

    return <HomePage />;
  }

  return (
    <div>
      <Header />
      {getPath()}{" "}
    </div>
  );
}

export default App;
