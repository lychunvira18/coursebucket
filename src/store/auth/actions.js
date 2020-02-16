import { authentication } from "./types";
export default {
  authentication: ({ commit }, fields) => {
    commit(authentication, fields);
  }
};
