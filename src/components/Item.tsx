import React, { useState } from "react";

import { FaTrash } from "react-icons/fa";
import styles from "./Item.module.css";

const TodoItem = (props: any) => {
  const [editing, setEditing] = useState(false);

  const { todo } = props;
  const { completed, _id, title } = todo;
  const { handleChangeProps, deleteTodoProps, setUpdate, updateTitleProps } =
    props;

  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      updateTitleProps(_id);
      setEditing(false);
    }
  };

  const completedStyle: React.CSSProperties = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  return (
    <li className={styles.item}>
      <div
        onDoubleClick={handleEditing}
        style={editing ? { display: "none" } : undefined}
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(_id)}
        />
        <button type="button" onClick={() => deleteTodoProps(_id)}>
          <FaTrash style={{ color: "black", fontSize: "16px" }} />
        </button>
        <span style={completed ? completedStyle : undefined}>{title}</span>
      </div>
      <input
        type="text"
        style={editing ? undefined : { display: "none" }}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, _id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
