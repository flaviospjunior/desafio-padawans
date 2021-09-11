import React, { useEffect, useState } from "react";
import Todos from "./components/Todos";
import Home from "./components/Home";
import ReactDOM from "react-dom";

export default function App() {
  return ReactDOM.render(<Home></Home>, document.getElementById("root"));
}
