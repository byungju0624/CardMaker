import React, { Fragment } from "react";
import CardAddForm from "../card_addform/card_addform";
import CardEditForm from "../card_editform/card_editform";
import styles from "./editor.module.css";
const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>

    {Object.keys(cards).map((key) => (
      <CardEditForm
        FileInput={FileInput}
        card={cards[key]}
        key={key}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm onAdd={addCard} FileInput={FileInput} />
  </section>
);

export default Editor;
