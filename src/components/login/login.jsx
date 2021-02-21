import styles from "./login.module.css";
import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const Login = ({ onClick, isLogin, authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log());
  };
  return (
    <section>
      <Header />
      <section className={styles.main}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li>
            <button className={styles.google} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.github} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
