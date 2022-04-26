import { combineReducers } from "@reduxjs/toolkit";
import JokeSlice from "./JokeSlice";

const rootReducer = combineReducers({
  JokeSlice,
});

export default rootReducer;
