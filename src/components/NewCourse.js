import React, { useState } from "react";
import TextInput from "./reusable/TextInput";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

function NewCourse(props) {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    setCourse(updatedCourse);
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.author = "Author is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) return;

    courseApi.saveCourse(course).then(() => {
      toast("New course added successfully");
      props.history.push("/courses");
    });
  }

  return (
    <div className="container-fluid">
      <br />
      <form onSubmit={handleSubmit}>
        <TextInput
          id="title"
          name="title"
          label="Course Title"
          placeholder="Title"
          error={errors.title}
          onChange={handleChange}
        />

        <div className="form-group">
          <label htmlFor="title">Author</label>
          <div className="field">
            <select
              id="author"
              name="authorId"
              onChange={handleChange}
              value={course.authorId || ""}
              className="form-control"
            >
              <option value="">Select Author</option>
              <option value="1">Cory House</option>
              <option value="2">Scott Allen</option>
            </select>
          </div>
          {errors.author && (
            <div className="alert alert-danger">Author is required</div>
          )}
        </div>

        <TextInput
          id="category"
          name="category"
          label="Category Name"
          placeholder="Category"
          error={errors.category}
          onChange={handleChange}
        />

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default NewCourse;
