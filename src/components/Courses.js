import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => {
      setCourses(_courses);
    });
  }, []);

  return (
    <>
      <h1>Courses</h1>
      <br />
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Author ID</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Courses;
