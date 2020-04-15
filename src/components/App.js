import React from "react";
import HomePage from "./Homepage";
import About from "./About";
import Header from "./common/Header";
import Courses from "./Courses";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
    </div>
  );
}

export default App;
