import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      // 1. 変更前のstateの状態を展開
      // 2. spread構文を使用してaction.payloadの値でstateの状態を上書きする
      // ※ `...state`がないとstateにあってaction.payloadに存在しない値がある場合、
      //    Mergeされた際にstateの値が消えてしまう
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
