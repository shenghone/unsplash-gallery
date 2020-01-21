import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Photographic from "./Pages/Photographic";
import Photo from "./Pages/Photo";

import configureStore from "./redux";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/photo/:id" component={Photo}></Route>
        <Route exact path="/search" component={App}></Route>
        <Route exact path="/about" component={App}></Route>
        <Route exact path="/author" component={App}></Route>
        <Route exact path="/photographer/:id" component={Photographic}></Route>
        <Route exact path="/" component={App}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
