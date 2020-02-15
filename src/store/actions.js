import {
  nameField,
  usernameField,
  rollNumberField,
  emailField,
  passwordField
} from "./types/authTypes";
export default {
  nameField: ({ commit }, name) => {
    commit(nameField, name);
  },
  usernameField: ({ commit }, username) => {
    commit(usernameField, username);
  },
  rollNumberField: ({ commit }, rollNumber) => {
    commit(rollNumberField, rollNumber);
  },
  emailField: ({ commit }, email) => {
    commit(emailField, email);
  },
  passwordField: ({ commit }, password) => {
    commit(passwordField, password);
  }
};
