import axios from "axios";
import { URL } from "../config";
class AuthService {
  static signup({ rollNumber, username, name, email, password }) {
    return new Promise(resolve => {
      axios
        .post(`${URL}:3000/signup`, {
          rollNumber,
          username,
          name,
          email,
          password
        })
        .then(res => resolve(res.data))
        .catch(err => resolve(err));
    });
  }
  // static signin({ username, password }) {
  //   return new Promise(resolve => {});
  // }
}
export default AuthService;
