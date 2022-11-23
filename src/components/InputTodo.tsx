import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import styles from "../App.module.css";
const InputTodo = (props: any) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: "",
      });
    }
  };

  return (
    <form className={styles.formContainer}>
      <input
        type="text"
        className={styles.inputText}
        placeholder="Enter To-Do title"
        value={inputText.title}
        onChange={onChange}
        name="title"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className={styles.inputSubmit}
      >
        <FaPlusCircle
          style={{ color: "red", fontSize: "20px", marginTop: "2px" }}
        />
      </button>
    </form>
  );
};

export default InputTodo;
