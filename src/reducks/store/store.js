// reduxモジュールのimport
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import { UsersReducer } from "../users/reducers";

// 1. reduxのcreateStoreメソッドをreturn
export default function createStore(history) {
  // reduxのcreateStoreメソッドの別名
  return reduxCreateStore(
    // 2. combineReducersでstateを生成
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  );
}
