import React, { memo } from "react";
import styles from "./card.module.css";
const DEFAULT_IMAGE = "/images/default_logo.png";
const Card = memo(({ card }) => {
  const {
    name,
    company,
    theme,
    position,
    email,
    text,

    fileUrl,
  } = card;
  const url = fileUrl || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="myselfie" />
      <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.position}>{position}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  );
});
function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme:${theme}`);
  }
}
export default Card;
