import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6"></div>

        <div className="col-md-6">
          <h2 className="text-warning">Page Not Found</h2>
          <br />
          <p className="lead">
            We could not find the request page, but well, <br />
            Meet the developer. He is the one that developed this site.
          </p>

          <Link to="/" className="btn btn-warning text-white">
            Go Back Home 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
