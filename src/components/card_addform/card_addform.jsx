import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_addform.module.css";

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();
  const onSumit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value || "",
      position: positionRef.current.value || "",
      email: emailRef.current.value || "",
      text: textRef.current.value || "",
      fileName: "",
      fileUrl: "",
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input
        ref={nameRef}
        className={styles.input}
        text="text"
        name="name"
        placeholder="Name"
      ></input>
      <input
        ref={companyRef}
        className={styles.input}
        text="text"
        name="company"
        placeholder="Company"
      ></input>
      <select
        ref={themeRef}
        name="theme"
        placeholder="theme"
        className={styles.select}
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={positionRef}
        className={styles.input}
        text="text"
        name="position"
        placeholder="Position"
      ></input>
      <input
        ref={emailRef}
        className={styles.input}
        text="text"
        name="email"
        placeholder="Email"
      ></input>
      <textarea
        ref={textRef}
        className={styles.textarea}
        name="text"
        placeholder="Text"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>

      <Button name="Add" onClick={onSumit} />
    </form>
  );
};

export default CardAddForm;
