import { combineReducers } from "redux";
import { ProductReducer} from "./ProductsReducer";
import { CartReducer } from "./CartReducer";

export const rootReducer = combineReducers({
  products: ProductReducer,
  carts:CartReducer,
})