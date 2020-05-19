import React, {useEffect} from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./index.css";
import {Navigation, Wrapper, LoadingIndicator, Button} from "components";
import theme from "utils/theme";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {connect} from 'react-redux'
import {fetchBudget, fetchBudgetedCategories} from "data/action/budget.action";

function App({budget,fetchBudget, fetchBudgetedCategories}) {
  useEffect(()=>{
    fetchBudget(1);
    fetchBudgetedCategories(1);
  }, [fetchBudget,fetchBudgetedCategories])
  const {i18n} = useTranslation();
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Navigation items={[{content: 'Homepage', to: '/'}, {content: 'Budget', to: '/budget'}]}
                    RightElement={(
                      <div>
                        <Button variant='regular' onClick={() => i18n.changeLanguage('pl')}>pl</Button>
                        <Button variant='regular' onClick={() => i18n.changeLanguage('en')}>en</Button>
                      </div>
                    )}/>
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

const ConnectedApp = connect(state => {
    return {
      budget: state.budget.budget
    }
  },{
  fetchBudget,
  fetchBudgetedCategories
})(App)

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator/>}>
        <ConnectedApp/>
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
