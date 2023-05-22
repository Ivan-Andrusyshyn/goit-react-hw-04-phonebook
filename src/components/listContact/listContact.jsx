import css from "./list.module.css";
import PropTypes from "prop-types";
const ContactList = ({ contacts, onDeleteTodo }) => {
  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.list_item}>
            {name}: {number}
            <button
              className={css.list__item_btn}
              onClick={() => onDeleteTodo(id)}
            >
              Delete
            </button>{" "}
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
  onDeleteTodo: PropTypes.func.isRequired,
};
