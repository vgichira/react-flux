import React, { useState, useEffect } from "react";
import AuthorList from "./AuthorList";
import { getAuthors, deleteAuthor } from "../../api/authorApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((_authors) => {
      setAuthors(_authors);
    });
  }, []);

  const handleDelete = async (event) => {
    event.preventDefault();
    var authorID = event.target.id;

    deleteAuthor(authorID).then(async () => {
      toast("Author deleted successfully.");
      getAuthors().then((authors) => {
        setAuthors(authors);
      });
    });
  };

  return (
    <div className="container-fluid">
      <h2>Authors</h2>
      <Link className="btn btn-primary" to="/author/new">
        New Author
      </Link>
      <br />
      <br />
      <AuthorList authors={authors} onDelete={handleDelete} />
    </div>
  );
}

export default Authors;
