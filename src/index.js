import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/reduxStore";
import StoreContext from "./storeContext";
let renderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store);
store.subscribe(() => {
  renderEntireTree(store);
});

reportWebVitals();
