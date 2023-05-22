import css from "./search.module.css";
import PropTypes from "prop-types";

const Filter = ({ searchFilter, filter }) => {
  return (
    <div>
      <h2>Find contact by name </h2>
      <label htmlFor="">
        <input
          value={filter}
          className={css.input_search}
          type="text"
          name="name"
          onChange={(e) => searchFilter(e)}
          required
        />
      </label>
    </div>
  );
};
export { Filter };
Filter.propTypes = {
  searchFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
