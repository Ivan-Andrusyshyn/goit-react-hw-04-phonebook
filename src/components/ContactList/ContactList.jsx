import css from "./list.module.css";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { handleDelete } from "components/contactsSlice/contactsSlice";
import { useState, useEffect } from "react";
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const name = useSelector((state) => state.contacts.filter);
  const [filtered, setFiltered] = useState(contacts);
  const onDeleteTodo = (id) => {
    dispatch(handleDelete(id));
  };

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

  return (
    <ul className={css.contact_list}>
      {filtered.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.list_item}>
            {name}: {number}
            <button
              className={css.list__item_btn}
              onClick={() => onDeleteTodo(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export { ContactList };
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
