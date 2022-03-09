import { useReducer } from "react";
import { ContactReducer } from "../reducers/ContactReducer";
import { FormAdd } from "./FormAdd";
import { TableContacts } from "./TableContacts";

const contacts = [
  {
    id: "asdass",
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
  const [state, dispatch] = useReducer(ContactReducer, contacts);

  return (
    <div className="container mt-3">
      <FormAdd dispatch={dispatch} />
      <TableContacts contacts={state} dispatch={dispatch} />
    </div>
  );
};
