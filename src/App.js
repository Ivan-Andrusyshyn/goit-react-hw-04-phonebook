// import PropTypes from "prop-types";
import { ContactList } from "./components/listContact/listContact";
import { ContactForm } from "./components/form/formContact";
import { Filter } from "./components/search/search";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import css from "./app.module.css";
import { contactInfo } from "contacts";
function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || contactInfo
  );
  const [filter, setFilter] = useState("");

  const filterHendler = () => {
    const normalFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalFilter)
    );
  };
  const searchFilter = ({ currentTarget }) => {
    setFilter(currentTarget.value);
  };
  const formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const filtredItem = checkOnSubm(newContact);
    if (filtredItem.length > 0) return;
    setContacts([newContact, ...contacts]);
  };
  const checkOnSubm = (newContact) => {
    return contacts.filter(({ name }) => {
      const newContactName = name.toLowerCase();
      const newNameCont = newContact.name.toLowerCase();
      if (newContactName === newNameCont) {
        alert(`${name} is already in contacts`);
        return newNameCont;
      }
    });
  };
  const onDeleteTodo = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, []);

  const filterdCintacts = filterHendler();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <Filter searchFilter={searchFilter} filter={filter} />
      <ContactList contacts={filterdCintacts} onDeleteTodo={onDeleteTodo} />
    </div>
  );
}

export { App };
