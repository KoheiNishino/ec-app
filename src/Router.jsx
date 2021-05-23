import React from "react";
import { Route, Switch } from "react-router";
import { Home, Reset, SignIn, SignUp } from "./templates";
import Auth from "./Auth";

const Router = () => {
  // 認証が必要となる画面（ログイン状態で表示させる画面）はAuthコンポーネントでラッピングする
  return (
    <Switch>
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={Reset} />
      <Route exact path={"/signup"} component={SignUp} />
      <Auth>
        <Route exact path={"(/)?"} component={Home} />
      </Auth>
    </Switch>
  );
};

export default Router;
