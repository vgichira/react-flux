import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

function ManageCourse(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  const handleChange = (event) => {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    setCourse(updatedCourse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
        props.history.push("/courses")
    });
  };

  return (
    <div className="container-fluid">
      <h2>Manage Course</h2>

      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ManageCourse;
