import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

function ManageCourse(props) {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseApi.getCourseBySlug(props.match.params.slug).then((_course) => setCourse(_course));
  }, [props.match.params.slug]);

  const handleChange = (event) => {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.id,
    };
    setCourse(updatedCourse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid()) return;

    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast("Course added successfully");
    });
  };

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.author = "Author is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  return (
    <div className="container-fluid">
      <h2>Manage Course</h2>

      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ManageCourse;
