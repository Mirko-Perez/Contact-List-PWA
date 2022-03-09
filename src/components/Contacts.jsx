import { useReducer } from "react";
import { ContactReducer } from "../reducers/ContactReducer";
import { FormAdd } from "./FormAdd";
import { TableContacts } from "./TableContacts";

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

export const Contacts = () => {
  const reducer = useReducer(ContactReducer, contacts);

  return (
    <div className="container mt-3">
      <FormAdd />
      <TableContacts contacts={contacts} />
    </div>
  );
};
