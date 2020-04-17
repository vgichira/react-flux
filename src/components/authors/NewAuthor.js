import React, { useState } from "react";
import TextInput from "../reusable/TextInput";
import { saveAuthor } from "../../api/authorApi";
import { toast } from "react-toastify";

function NewAuthor(props) {
  const [author, setAuthor] = useState({
    id: null,
    name: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const _author = { ...author, [event.target.name]: event.target.value };
    setAuthor(_author);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) return;

    saveAuthor(author).then(() => {
      toast("New author added successfully");
      props.history.push("/authors");
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!author.name) _errors.author = "Author name is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  return (
    <div className="container-fluid">
      <br />
      <form onSubmit={handleSubmit}>
        <TextInput
          id="name"
          name="name"
          label="Author Name"
          placeholder="Enter Author Name"
          onChange={handleChange}
        />
        {errors.author && (
          <div className="alert alert-danger">{errors.author}</div>
        )}

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default NewAuthor;
