import css from "./formContac.module.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    if (name === "name") {
      setName(value);
    } else {
      setNumber(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    e.currentTarget.reset();
  };
  return (
    <form action="" className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="" className={css.form_lable}>
        Name
        <input
          className={css.input_form}
          type="text"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="" className={css.form_lable}>
        Number
        <input
          className={css.input_form}
          type="tel"
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.form_btn}>
        Add contact
      </button>
    </form>
  );
};
export { ContactForm };
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
