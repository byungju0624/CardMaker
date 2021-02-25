import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";
const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>preview</h1>
    <ul className={styles.cards}>
      {cards.map((card) => (
        <Card card={card} style={{ marginRight: "0" }} />
      ))}
    </ul>
  </section>
);

export default Preview;
