/* 리듀서가 많을 수 있다. combine을 이용해서 root에 합쳐지게 함 */

import { combineReducers } from "redux";
import user from "./user_reducer";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
