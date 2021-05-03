import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { RouteWithSubRoutes } from "./routes/RouteWithSubRoutes";
import routes from "./routes/routes";
import store from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
