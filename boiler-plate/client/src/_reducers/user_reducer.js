import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_action/types";
function User_Reducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      console.log(action.payload);
      return { ...state, register: action.payload };
    case AUTH_USER:
      console.log(action.payload);
      return { ...state, userData: action.payload }; // 모든 유저 데이터임
    default:
      return state;
  }
}

export default User_Reducer;
