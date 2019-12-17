import { combineReducers } from "redux";
import signUpReducer from "./signUps/reducer";
import loginReducer from "./login/reducer";
import roomReducer from "../store/room/reducer";

export default combineReducers({
  //reducer
  signUp: signUpReducer,
  login: loginReducer,
  gameroom: roomReducer
});
