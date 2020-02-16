export default {
  authentication: (state, fields) => {
    state.authentication = { ...state.authentication, ...fields };
  }
};
