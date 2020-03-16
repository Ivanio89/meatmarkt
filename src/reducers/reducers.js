import { combineReducers } from "redux";
import commoditys from "./PorkReducer";
import active from "../active/Active";

const elemRedux = combineReducers({
  commoditys: commoditys,
  active: active
});

export default elemRedux;
