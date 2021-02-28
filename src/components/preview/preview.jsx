import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";
const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Card key={key} card={cards[key]} style={{ marginRight: "0" }} />
      ))}
    </ul>
  </section>
);

export default Preview;
