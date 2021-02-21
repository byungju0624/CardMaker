import styles from "./login.module.css";
import React from "react";

const Login = ({ onClick, isLogin }) => {
  console.log(isLogin);
  return (
    <div className={styles.login}>
      <header className={styles.header}>
        <div>
          <img src="./images/logo.png" />
        </div>
        <div>
          <h1>Business Card Maker</h1>
        </div>
        <div className={styles.logout}>
          {!isLogin ? <button>logout</button> : undefined}
        </div>
      </header>
      <div className={styles.loginarea}>
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <button>Google Login</button>
        </div>
        <div>
          <button>Github Login</button>
        </div>
      </div>
      <footer className={styles.footer}>
        <h5>code your dream</h5>
      </footer>
    </div>
  );
};

export default Login;
