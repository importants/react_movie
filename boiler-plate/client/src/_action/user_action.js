import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";
export function loginUser(dataToSubmit) {
  // 유저의 email과 password를 dataTosubmit을 통해 전달

  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
  // state와 action을 조합해서 reducer에 전달
}

export function registerUser(dataToSubmit) {
  // 유저의 email과 password를 dataTosubmit을 통해 전달

  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
  // state와 action을 조합해서 reducer에 전달
}

export function auth() {
  // 유저의 email과 password를 dataTosubmit을 통해 전달

  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
  // state와 action을 조합해서 reducer에 전달
}
