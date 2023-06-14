import { createSlice } from "@reduxjs/toolkit";
import { contactInfo } from "contacts";
import { nanoid } from "nanoid";
const counterSlice = createSlice({
  name: "contact",
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
      const newContact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };

      state.contacts.push(newContact);
    },
    handleOnChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { handleDelete, handleOnChange, addTodoItem } =
  counterSlice.actions;
export default counterSlice.reducer;
