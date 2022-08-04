import { createStore } from "redux";
import userReducer from "./reducer/userReducer";

let store = createStore(userReducer);

export default store;
