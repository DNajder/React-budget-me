import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./index.css";
import { Navigation, Wrapper, LoadingIndicator, Button } from "components";
import theme from "utils/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation items={[{ content: 'Homepage', to: '/' }, { content: 'Budget', to: '/budget' }]}
          RightElement={(
            <div>
              <Button variant='regular' onClick={() => i18n.changeLanguage('pl')}>pl</Button>
              <Button variant='regular' onClick={() => i18n.changeLanguage('en')}>en</Button>
            </div>
          )} />
        <Wrapper>
          <Switch>
            <Route exact path="/">Home Page</Route>
            <Route path="/budget">Budget Page</Route>
          </Switch>
        </Wrapper>
      </Router>
    </>
  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
