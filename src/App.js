import React from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./index.css";
import {Navigation} from "components";
import theme from "utils/theme";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navigation items={[{content:'Homepage', to:'/'},{content: 'Budget', to: '/budget'}]}/>
        <Switch>
          <Route exact path="/">Home Page</Route>
          <Route path="/budget">Budget Page</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
