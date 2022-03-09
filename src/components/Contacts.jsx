import React from "react";
import { TableContacts } from "./TableContacts";

export const Contacts = () => {
  const contacts = [
    {
      id: "asdas",
      name: "asdas",
      phone: "asdas",
      action: "asdas",
    },
    {
      id: "asdas",
      name: "asdas",
      phone: "asdas",
      action: "asdas",
    },
  ];

  return (
    <div className="container mt-3">
      <TableContacts contacts={contacts} />
    </div>
  );
};
