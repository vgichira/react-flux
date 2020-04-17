import React from "react";

function AuthorList(props) {
  return (
    <ul className="list-group">
      {props.authors.map((author) => {
        return (
          <li className="list-group-item" key={author.id}>
            {author.name}
          </li>
        );
      })}
    </ul>
  );
}

export default AuthorList;
