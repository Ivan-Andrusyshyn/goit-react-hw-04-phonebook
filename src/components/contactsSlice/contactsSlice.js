import { createSlice } from "@reduxjs/toolkit";
import { contactInfo } from "contacts";
import { nanoid } from "nanoid";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    filter: "",
    contacts: contactInfo,
  },
  reducers: {
    handleDelete: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addTodoItem: (state, action) => {
      if (state.contacts.find(({ name }) => name === action.payload.name)) {
        return;
      }
      const newContact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };

      state.contacts = state.contacts.concat(newContact);
    },
    handleOnChange: (state, action) => {
      state.filter = action.payload;
      if (state.filter === "") {
        state.contacts = contactInfo;
      } else {
        state.contacts = state.contacts.filter(({ name }) =>
          name.toLowerCase().includes(state.filter.toLowerCase())
        );
      }
    },
  },
});

export const { handleDelete, handleOnChange, addTodoItem } =
  counterSlice.actions;
export default counterSlice.reducer;
