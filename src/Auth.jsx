import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "./reducks/users/selectors";
import { listenAuthState } from "./reducks/users/operations";

// Auth Component: ユーザーがサインイン状態かを判定する
const Auth = ({ children }) => {
  const dispatch = useDispatch();

  // Reduxのstoreからstateを取得
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  // 1回目のrenderが走った後に実行したい関数を記述
  // ※ Class ComponentでいうところのcomponentDidMountと同じ
  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  }, []);

  if (!isSignedIn) {
    return <></>;
  } else {
    return children; // RouterのAuthの子要素を返す
  }
};

export default Auth;
