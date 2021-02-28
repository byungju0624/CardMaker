import React, { Fragment } from "react";
import CardAddForm from "../card_addform/card_addform";
import CardEditForm from "../card_editform/card_editform";
import styles from "./editor.module.css";
const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>

    {cards.map((card) => (
      <CardEditForm card={card} key={card.id} />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
