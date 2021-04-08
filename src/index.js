import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/reduxStore";
import { Provider } from "react-redux";
let renderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store);
store.subscribe(() => {
  renderEntireTree(store);
});

reportWebVitals();
