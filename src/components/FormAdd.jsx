import React from "react";

export const FormAdd = () => {
  return (
    <div className="container">
      <label className="mx-1 d-grid gap-2">
        Name :{" "}
        <input
          placeholder="Name..."
          className="form-control"
          autoComplete="off"
          type="text"
        />
      </label>
      <label className="mx-1 d-grid gap-2">
        Phone :{" "}
        <input
          placeholder="Phone..."
          className="form-control"
          autoComplete="off"
          type="text"
        />
      </label>
      <div className="mx-1 d-grid gap-2">
        <button className="btn btn-info mt-2">Add</button>
      </div>
    </div>
  );
};
