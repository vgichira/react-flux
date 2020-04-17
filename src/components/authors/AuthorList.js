import React from "react";
import { Link } from "react-router-dom";

function AuthorList(props) {
  return (
    <ul className="list-group">
      {props.authors.map((author) => {
        return (
          <li className="list-group-item" key={author.id}>
            {author.name}

            <Link className="float-right btn btn-sm btn-danger" id={author.id} onClick={props.onDelete} to="">Remove</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default AuthorList;
