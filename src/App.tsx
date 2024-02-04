import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact strict>
            <Suspense>
              <route.Component />
            </Suspense>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
