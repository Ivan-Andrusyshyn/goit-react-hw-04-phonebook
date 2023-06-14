import { ContactList } from "./components/ContactList/ContactList";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./app.module.css";
function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ToastContainer />
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
