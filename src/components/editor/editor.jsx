import React, { Fragment } from "react";
import CardEditForm from "../card_editform/card_editform";
import styles from "./editor.module.css";
const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul>
      {cards.map((card) => (
        <CardEditForm card={card} />
      ))}
    </ul>
  </section>
);

export default Editor;
