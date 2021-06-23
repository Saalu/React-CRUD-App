import React, { useState } from "react";

function UpdateStudent(props) {
  const { student } = props.location;
  const [name, setName] = useState(student.name);
  const [level, setLevel] = useState(student.level);

  const update = (e) => {
    e.preventDefault();

    const upd = { id: student.id, name, level };
    props.updateHandler(upd);
    props.history.push("/");
  };
  return (
    <div className="container">
      <form className="" onSubmit={update}>
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
          <button type="submit" className="btn btn-success btn-block mt-3">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateStudent;
