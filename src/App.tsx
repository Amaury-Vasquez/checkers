import React, { Fragment } from "react";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Game } from "./components/Game";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Game />
    </Fragment>
  );
}

export default App;
