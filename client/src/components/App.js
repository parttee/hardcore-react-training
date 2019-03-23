import React, { useEffect } from "react";

import "./App.pcss";
import Loading from "./Loading";
import NotFound from "./NotFound";
import IndexPage from "./containers/IndexPageContainer";
import PersonPage from "./containers/PersonPageContainer";
import { Switch, Route } from "react-router";

const App = props => {
  const { counter, loading, getPersons } = props;

  useEffect(() => {
    getPersons();
  }, []);

  return (
    <div>
      {loading && <Loading />}

      <h1>Awesomenium d-ERP 900{counter}</h1>

      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/person/:id" component={PersonPage} />
        <NotFound />
      </Switch>
    </div>
  );
};

export default App;
