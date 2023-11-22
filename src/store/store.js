import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { productReducer } from "./reducers/productReducer";
import { studentReducer } from "./reducers/studentReducer";
import { userReducer } from "./reducers/userReducer";
import { logger } from "./midleware/logger";
import { yetkiKontrolu } from "./midleware/yetkiKontrolu";

export const reducers = combineReducers({
  product: productReducer,
  student: studentReducer,
  user: userReducer,
});

export const store = createStore(
  reducers,
  applyMiddleware(logger, yetkiKontrolu)
);
