import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} className={styles.header} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
