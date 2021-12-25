import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Routes from "./routes";

function App() {
  return (
    <Layout>
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          {Routes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Suspense>
      </Switch>
    </Layout>
  );
}

export default App;
