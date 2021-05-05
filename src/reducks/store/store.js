// reduxモジュールのimport
import { createStore as reduxCreateStore, combineReducers } from "redux";

// Reducersのimport
//import { ProductsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";

// 1. reduxのcreateStoreメソッドをreturn
export default function createStore() {
  // reduxのcreateStoreメソッドの別名
  return reduxCreateStore(
    // 2. combineReducersでstateを生成
    combineReducers({
      //products: ProductsReducer,
      users: UsersReducer,
    })
  );
}
