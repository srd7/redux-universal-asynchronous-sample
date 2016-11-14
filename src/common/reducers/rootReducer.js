import { combineReducers } from "redux";
import { routerReducer }   from "react-router-redux";

import home                from "src/common/reducers/HomeReducer";
import counter             from "src/common/reducers/CounterReducer";

const rootReducer = combineReducers({
  routing: routerReducer,
  home,
  counter,
});

export default rootReducer;
