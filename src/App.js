import { ContactList } from "./components/ContactList/ContactList";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import {
  handleOnChange,
  handleDelete,
  addTodoItem,
} from "./components/contactsSlice/contactsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./app.module.css";
import { useEffect, useState } from "react";
function App() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const name = useSelector((state) => state.contacts.filter);
  const [filtered, setFiltered] = useState(contacts);

  useEffect(() => {
    const filterHandler = () => {
      const normalFilter = name.toLowerCase();
      const filtered = contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalFilter)
      );
      setFiltered(filtered);
    };
    filterHandler();
  }, [name, contacts]);

  const dispatch = useDispatch();
  const handleInput = (e) => {
    const value = e.currentTarget.value.trim();
    dispatch(handleOnChange(value));
  };

  const formSubmitHandler = ({ name, number }) => {
    if (contacts.some((contact) => contact.name === name)) {
      toast.error("Contact already exists!");
    } else {
      dispatch(addTodoItem({ name, number }));
    }
  };

  const onDeleteTodo = (id) => {
    dispatch(handleDelete(id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ToastContainer />
      <ContactForm onSubmit={formSubmitHandler} />
      <Filter searchFilter={handleInput} nameFiltered={name} />
      <ContactList contacts={filtered} onDeleteTodo={onDeleteTodo} />
    </div>
  );
}

export default App;
