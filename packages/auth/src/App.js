import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/styles";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={SignIn} />
            <Route path="/auth/signup" component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
