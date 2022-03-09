import { useState } from "react";
import { v4 as uuid } from "uuid";

export const FormAdd = ({ dispatch }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
  });

  const { name, phone } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      name,
      phone,
    },
  };

  const handleAdd = () => {
    if (actionAdd.payload.phone.length > 10) {
      dispatch(actionAdd);
    } else {
      alert("Telefono minimo 10 caracteres");
    }
  };

  return (
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Name :{" "}
          <input
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name..."
            className="form-control"
            autoComplete="off"
            type="text"
          />
        </label>
        <label className="mx-1 d-grid gap-2">
          Phone :{" "}
          <input
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="Phone..."
            className="form-control"
            autoComplete="off"
            type="number"
          />
        </label>
        <div className="mx-1 d-grid gap-2">
          <button className="btn btn-info mt-2" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};
