import React from "react";

export const TableContacts = ({ contacts }) => {
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
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
