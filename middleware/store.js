import { createStore, applyMiddleware } from "redux"; // Correctly import from 'redux'
import {thunk} from "redux-thunk";
import UserReducer from "./UserReducer";

export const store = createStore(UserReducer, applyMiddleware(thunk)); // Use UserReducer directly