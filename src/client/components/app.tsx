import React from "react";
import Header from "./header";
import Main from "./main";
import ErrorHandler from "./../components/error-handler";

const App = () => (
  <div>
    <ErrorHandler>
      <Header />
      <Main />
    </ErrorHandler>

  </div>
);

export default App;
