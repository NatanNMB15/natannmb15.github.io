import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./pages/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  );
}
