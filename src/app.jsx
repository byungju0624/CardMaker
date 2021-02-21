import React, { useState } from "react";
import styles from "./app.module.css";
import Login from "./components/login/login.jsx";
import Maker from "./components/maker/maker";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App({ authService }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
