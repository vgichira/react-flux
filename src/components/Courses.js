import React, { useState, useEffect } from "react";
import { getCourses, deleteCourse } from "../api/courseApi";
import CourseList from "./CourseList";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Courses(props) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => {
      setCourses(_courses);
    });
  }, []);

  function removeCourse(event) {
    event.preventDefault();

    const courseID = event.target.id;

    if (courseID) {
      deleteCourse(courseID).then((data) => {
        toast("Course deleted successfully.");
        getCourses().then((courses) => {
          setCourses(courses);
        });
      });
    }
  }

  return (
    <div className="container-fluid">
      <h1>Courses</h1>
      <Link className="btn btn-primary" to="/course">
        New Course
      </Link>
      <br />
      <br />
      <CourseList courses={courses} onRemoveCourse={removeCourse} />
    </div>
  );
}

export default Courses;
