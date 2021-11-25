import React from 'react';
import ReactDOM from "react-dom";
import { MyApp } from "./myapp";
import * as tfutils from "./tf_utils";

console.log({ tfutils });

const appEl = document.getElementById("app");
ReactDOM.render(<MyApp />, appEl);
