import styles from "./login.module.css";
import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router";

const Login = ({ onClick, isLogin, authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };
  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMaker(user.uid);
      });
  });

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
