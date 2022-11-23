import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "../App.module.css";
const SearchTodo = (props: any) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.searchTitle(e.target.value);
  };

  return (
    <form className={styles.formContainer} style={{ justifyContent: "center" }}>
      <input
        type="text"
        className={styles.inputText}
        placeholder="Search To-Do"
        onChange={onChange}
        name="title"
      />
      <BiSearch
        className={styles.inputSubmit}
        style={{
          color: "blue",
          fontSize: "20px",
          marginTop: "2px",
          cursor: "default",
        }}
      />
    </form>
  );
};

export default SearchTodo;
