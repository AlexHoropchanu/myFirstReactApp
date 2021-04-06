import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
renderEntireTree(store.getstate());
store.subscribe(renderEntireTree);

reportWebVitals();
