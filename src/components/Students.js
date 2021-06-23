import React from "react";
import StudentList from "./StudentList";
import { Link } from "react-router-dom";

function Student({ students, deleteHandler }) {
  const renderList = students.map((student) => (
    <StudentList
      key={student.id}
      student={student}
      deleteHandler={deleteHandler}
    />
  ));

  return (
    <div className="container">
      <div className="d-flex space-between">
        <h3 className="display">List students</h3>
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          <button type="submit" className="btn btn-primary">
            Add Student
          </button>
        </Link>
      </div>
      {renderList.length >= 1 ? renderList : "No Items Available"}
    </div>
  );
}

export default Student;
