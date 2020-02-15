export default {
  nameField: (state, name) => {
    state.authentication.name = name;
  },
  usernameField: (state, username) => {
    state.authentication.username = username;
  },
  rollNumberField: (state, rollNumber) => {
    state.authentication.rollNumber = rollNumber;
  },
  emailField: (state, email) => {
    state.authentication.email = email;
  },
  passwordField: (state, password) => {
    state.authentication.password = password;
  }
};
