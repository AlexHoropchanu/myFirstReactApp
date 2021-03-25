import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { removePost, subscribe } from "./Redux/state";
import state from "./Redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost } from "./Redux/state";
import { changePostTextArea } from "./Redux/state";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        removePost={removePost}
        changePostTextArea={changePostTextArea}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
renderEntireTree(state);
subscribe(renderEntireTree);

reportWebVitals();
