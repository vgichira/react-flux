import React from "react";
import HomePage from "./Homepage";
import About from "./About";
import Header from "./reusable/Header";
import Courses from "./Courses";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import ManageCourse from "./ManageCourse";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/course/:slug" component={ManageCourse} />
        <Redirect from="/about-us" to="/about" />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
