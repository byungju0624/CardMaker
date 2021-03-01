import React from "react";
import Button from "../button/button";
import styles from "./card_editform.module.css";

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, theme, position, email, text, fileName } = card;
  const onSumit = (e) => {
    e.preventDefault();
    deleteCard(card);
  };
  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileUrl: file.url,
    });
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
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>

      <Button name="Delete" onClick={onSumit} />
    </form>
  );
};

export default CardEditForm;
