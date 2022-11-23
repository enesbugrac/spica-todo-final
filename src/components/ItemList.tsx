import React from "react";
import TodoItem from "./Item";
import { TodoItemInterface } from "../App";

const TodoList = (props: any) => {
  const { todos } = props;
  const { handleChangeProps, deleteTodoProps, setUpdate, updateTodoItemTitle } =
    props;
  return (
    <ul>
      {todos.map((todo: TodoItemInterface) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          updateTitleProps={updateTodoItemTitle}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
