import React from "react";
import TextInput from "./reusable/TextInput";

function CourseForm(props) {
  const { title, authorId, category } = props.course;

  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        onChange={props.onChange}
        placeholder="Enter Title"
        value={title}
      />

      <div className="form-group">
        <label htmlFor="title">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={authorId || ""}
            className="form-control"
          >
            <option value="">Select Author</option>
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <TextInput
        id="category"
        name="category"
        onChange={props.onChange}
        placeholder="Enter Category"
        label="Category"
        value={category}
      />

      <input className="btn btn-success" value="Add Course" type="submit" />
    </form>
  );
}

export default CourseForm;
