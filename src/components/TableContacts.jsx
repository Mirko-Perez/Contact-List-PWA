import React from "react";

export const TableContacts = ({ contacts = [], dispatch }) => {
  const handleDelete = (id) => {
    const actionDelete = {
      type: "delete",
      payload: id,
    };

    dispatch(actionDelete);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          const finalId = contact.id.split("-");

          return (
            <tr key={contact.id}>
              <th>{finalId[0]}</th>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
