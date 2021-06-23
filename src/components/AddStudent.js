import React, { useState } from "react";

function AddStudent(props) {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  const AddItem = (e) => {
    e.preventDefault();

    const input = { name, level };
    props.addHandler(input);
    props.history.push("/");
    setName("");
    setLevel("");
  };
  return (
    <div className="container">
      <form className="" onSubmit={AddItem}>
        <div className="">
          <label className="">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="">
          <label className="">Level</label>
          <input
            type="text"
            className="form-control"
            name="position"
            placeholder="Eg. Beginner"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>

        <div className="">
          <button type="submit" className="btn btn-primary mt-3">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
