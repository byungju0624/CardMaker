import React, { useState } from "react";
import styles from "./app.module.css";
import Login from "./components/login/login.jsx";

function App({ authService }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={styles.main}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
