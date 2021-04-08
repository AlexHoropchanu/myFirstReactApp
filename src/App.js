import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/nav";
import Profile from "./components/Profile/profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <div className="main">
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/messages" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
