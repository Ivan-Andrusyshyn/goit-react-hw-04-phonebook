import css from "./formContac.module.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    e.currentTarget.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    const { handleSubmit, handleChange } = this;
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
  }
}
export { ContactForm };
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
