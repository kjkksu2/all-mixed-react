import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Audition from "./pages/Audition";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/Movies";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/audition" exact>
          <Audition />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
