import css from "./search.module.css";
import PropTypes from "prop-types";

const Filter = ({ searchFilter, nameFiltered }) => {
  return (
    <div className={css.search_container}>
      <h2 className={css.search_title}>Find contact by name</h2>
      <label className={css.search_label}>
        <input
          value={nameFiltered}
          className={css.input_search}
          type="text"
          name="name"
          onChange={searchFilter}
          required
        />
      </label>
    </div>
  );
};
export { Filter };
Filter.propTypes = {
  searchFilter: PropTypes.func.isRequired,
  nameFiltered: PropTypes.string.isRequired,
};
