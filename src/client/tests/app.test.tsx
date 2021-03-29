import React from 'react';
import App from './../components/app';
import * as ReactDOM from "react-dom";

it("renders without crashing", done => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  done();
});