import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
const Maker = ({ authService, FileInput, cardSave }) => {
  const [cards, setCards] = useState({});
  const historyState = useHistory().state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardSave.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
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
    cardSave.save(userId, card);
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardSave.remove(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} className={styles.header} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
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
