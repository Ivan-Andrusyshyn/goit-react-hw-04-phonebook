import css from "./search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handleOnChange } from "components/contactsSlice/contactsSlice";
const Filter = () => {
  const name = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    const value = e.currentTarget.value.trim();
    dispatch(handleOnChange(value));
  };

  return (
    <div className={css.search_container}>
      <h2 className={css.search_title}>Find contact by name</h2>
      <label className={css.search_label}>
        <input
          className={css.input_search}
          value={name}
          type="text"
          name="name"
          onChange={handleInput}
          required
        />
      </label>
    </div>
  );
};

export { Filter };
