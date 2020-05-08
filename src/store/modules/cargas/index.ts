import { combineReducers } from "redux";
import getListagemCargas from "./actions/getListagemCargas";

export default combineReducers({
  lista: getListagemCargas,
});
