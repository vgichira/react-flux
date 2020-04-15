import React from "react";

function ManageCourse(props) {
  return (
    <div className="container-fluid">
      <h2>Manage Course</h2>
      {props.match.params.slug}
    </div>
  );
}

export default ManageCourse;
