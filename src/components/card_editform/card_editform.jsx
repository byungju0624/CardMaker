import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_editform.module.css";

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    theme,
    position,
    email,
    text,
    fileName,
    fileUrl,
  } = card;
  const onSumit = () => {};
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        text="text"
        name="name"
        value={name}
      ></input>
      <input
        className={styles.input}
        text="text"
        name="company"
        value={company}
      ></input>
      <select name="theme" value={theme} className={styles.select}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        text="text"
        name="position"
        value={position}
      ></input>
      <input
        className={styles.input}
        text="text"
        name="email"
        value={email}
      ></input>
      <textarea className={styles.textarea} name="text" value={text}></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>

      <Button name="Delete" onClick={onSumit} />
    </form>
  );
};

export default CardEditForm;
