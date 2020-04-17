import React from "react";
import HomePage from "./home/Homepage";
import About from "./about/About";
import Header from "./reusable/Header";
import Courses from "./courses/Courses";
import { Route, Switch } from "react-router-dom";
import NotFound from "./404/NotFound";
import ManageCourse from "./courses/ManageCourse";
import NewCourse from "./courses/NewCourse";
import Authors from "./authors/Authors";
import NewAuthor from "./authors/NewAuthor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer hideProgressBar autoClose={3000} />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/course/:slug/edit" component={ManageCourse} />
        <Route path="/course" component={NewCourse} />
        <Route path="/authors" component={Authors} />
        <Route path="/author/new" component={NewAuthor} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
