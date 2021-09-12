import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todos from "./components/Todos";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Posts from "./components/Posts";
import ReactDOM from "react-dom";

export default function App() {
  return ReactDOM.render(
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/albums" component={Albums} />
      <Route path="/todos" component={Todos} />
      <Route path="/posts" component={Posts} />
    </Router>,
    document.getElementById("root")
  );
}
