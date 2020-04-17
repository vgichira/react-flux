import React, { useState, useEffect } from "react";
import AuthorList from "./AuthorList";
import { getAuthors } from "../../api/authorApi";
import { Link } from "react-router-dom";

function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((_authors) => {
      setAuthors(_authors);
    });
  }, []);

  return (
    <div className="container-fluid">
      <h2>Authors</h2>
        <Link className="btn btn-primary" to="/author/new">New Author</Link><br/><br/>
      <AuthorList authors={authors} />
    </div>
  );
}

export default Authors;
