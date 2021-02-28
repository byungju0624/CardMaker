import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_editform.module.css";

const CardEditForm = ({ card, updateCard, deleteCard }) => {
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
  const onSumit = () => {
    deleteCard(card);
  };
  const onChange = (e) => {
    if (e.currentTarget === null) {
      return;
    }
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(e.currentTarget.value);
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        text="text"
        name="name"
        value={name}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        text="text"
        name="company"
        value={company}
        onChange={onChange}
      ></input>
      <select
        name="theme"
        value={theme}
        className={styles.select}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        text="text"
        name="position"
        value={position}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        text="text"
        name="email"
        value={email}
        onChange={onChange}
      ></input>
      <textarea
        className={styles.textarea}
        name="text"
        value={text}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>

      <Button name="Delete" onClick={onSumit} />
    </form>
  );
};

export default CardEditForm;
