import { useReducer, useEffect, useState } from "react";
import { ContactReducer } from "../reducers/ContactReducer";
import { FormAdd } from "./FormAdd";
import { TableContacts } from "./TableContacts";

const init = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : [];
};

export const Contacts = () => {
  const [state, dispatch] = useReducer(ContactReducer, [], init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  const [formView, setformView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        className="btn btn-success mt-1"
        onClick={() => setformView(!formView)}
      >
        {formView ? "- Close" : "+ New"}
      </button>
      {formView && <FormAdd dispatch={dispatch} />}

      <TableContacts contacts={state} dispatch={dispatch} />
    </div>
  );
};
