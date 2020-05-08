import { combineReducers } from "redux";

import cargas from "./modules/cargas";
import snackbars from "./modules/snackbars";

export const rootReducer = combineReducers({
  cargas,
  snackbars,
});
