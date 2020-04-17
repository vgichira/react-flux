import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="jumbotron">
      <h1>React JS 101</h1>
      <p>React and React Router CRUD application.</p>
      <Link to="about" className="btn btn-primary">About</Link>
    </div>
  );
}

export default Homepage;
