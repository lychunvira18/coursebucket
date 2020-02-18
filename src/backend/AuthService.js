import axios from "axios";
import { URL } from "../config";
import { Date } from "core-js";
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
  static signin({ username, password }) {
    return new Promise(resolve => {
      axios
        .post(`${URL}:3000/signin`, {
          username,
          password
        })
        .then(res => {
          if (res.status == 200) {
            let now = new Date();
            now.setTime(now.getTime() + 1 * 3600 * 1000);
            document.cookie = `Token = ${
              res.data.token
            } ; expires=${now.toUTCString()}`;
          }
          resolve(res.data);
        })
        .catch(err => resolve(err));
    });
  }
}
export default AuthService;
