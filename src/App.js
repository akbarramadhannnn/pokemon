import { Switch, Route } from 'react-router-dom';
import Layout from 'layout';
import routes from 'router';

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          );
        })}
      </Switch>
    </Layout>
  );
};

export default App;
