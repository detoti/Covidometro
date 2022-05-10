import React from "react";
import { StylesProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalSyle from "./commons/global-style";
import Main from './containers/Main'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalSyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
