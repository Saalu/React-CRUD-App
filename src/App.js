import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import api from "./api";
import { uuid } from "uuidv4";
import "./App.css";
import Student from "./components/Students";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";

function App(props) {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  console.log("app", props.history);
  // READ
  const getHandler = async () => {
    const res = await api.get("/students");
    return res.data;
  };

  // CREATE
  const addHandler = async (input) => {
    const payload = { id: uuid(), ...input };
    const res = await api.post("/students", payload);

    setStudents([...students, res.data]);
  };
  // UPDATE
  const updateHandler = async (clicked) => {
    const res = await api.put(`/students/${clicked.id}`, clicked);

    const newItem = students.map((student) =>
      student.id === res.data.id ? res.data : clicked
    );

    if (newItem) setStudents([newItem]);
  };
  // DELETE
  const deleteHandler = async (id) => {
    await api.delete(`/students/${id}`);
    const newItem = students.filter((student) => student.id !== id);
    setStudents(newItem);
  };

  useEffect(() => {
    const fetch = async () => {
      const allStudents = await getHandler();
      setStudents(allStudents);
    };

    fetch();
  }, []);

  return (
    <div className="" style={{ width: "100%", maxWidth: "450px" }}>
      <Router>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h1 className="text-center mb-4">App Item Management</h1>
        </Link>
        <Switch>
          <Route
            path="/add"
            exact
            render={(props) => (
              <AddStudent {...props} addHandler={addHandler} />
            )}
          />

          <Route
            path="/"
            exact
            render={(props) => (
              <Student
                {...props}
                students={students}
                deleteHandler={deleteHandler}
              />
            )}
          />

          <Route
            path="/edit"
            exact
            render={(props) => (
              <UpdateStudent {...props} updateHandler={updateHandler} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
