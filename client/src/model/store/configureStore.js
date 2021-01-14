import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
//import createStore from "./customScore"
import reducer from "./reducers";
import logger from "./middleware/logger";
import api from "./middleware/api";

export default function store() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger, api],
  });
}
