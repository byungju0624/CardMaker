import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "byungju Jeong",
      company: "CodeStates",
      theme: "dark",
      position: "front-end",
      email: "byungju0624@gmail.com",
      text: "test",
      fileName: "byungju",
      fileUrl: null,
    },
    {
      id: "2",
      name: "byungju Jeong",
      company: "CodeStates",
      theme: "colorful",
      position: "front-end",
      email: "byungju0624@gmail.com",
      text: "test",
      fileName: "byungju",
      fileUrl: "byungju",
    },
    {
      id: "3",
      name: "byungju Jeong",
      company: "CodeStates",
      theme: "light",
      position: "front-end",
      email: "byungju0624@gmail.com",
      text: "test",
      fileName: "byungju",
      fileUrl: "byungju",
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} className={styles.header} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
