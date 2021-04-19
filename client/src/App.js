import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "./routes/RouteWithSubRoutes";
import routes from "./routes/routes";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
