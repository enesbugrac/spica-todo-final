import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/ItemList";
import styles from "./App.module.css";
// import {
//   bucketInitialize,
//   BUCKET_ID,
//   insert,
//   remove,
//   update,
//   getAll,
// } from "./service/Spica.service";
import SearchTodo from "./components/SearchTodo";
import TodoService from "./services/Spica.service";

export interface TodoItemInterface {
  title: string;
  _id: string;
  completed: boolean;
}
const App = () => {
  const [todos, setTodos] = useState<TodoItemInterface[]>([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    TodoService.getAll({
      queryParams: {
        filter: {
          title: { $regex: searchTitle.trim().toLowerCase() },
        },
      },
    }).then((res: any) => setTodos(res));
  }, [searchTitle]);

  useEffect(() => {
    TodoService.getAllRealtime().subscribe((res: any) => setTodos(res));
  }, []);

  const updateTodoItemStatus = (_id: string) => {
    TodoService.update(_id, {
      completed: !todos.find((item) => item._id === _id)?.completed,
    }).catch((err) => console.log(err));
  };

  const deleteTodoItem = (_id: string) => {
    TodoService.remove(_id).catch((err) => console.log(err));
  };

  const addTodoItem = (title: string) => {
    const newTodo = {
      title,
      completed: false,
    };
    TodoService.insert(newTodo).catch((err) => console.log(err));
  };

  const setUpdatedTodoItem = (updatedTitle: string, _id: string) => {
    setTodos(
      todos.map((todo: TodoItemInterface) => {
        if (todo._id === _id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };
  const updateTodoItemTitle = (_id: string) => {
    TodoService.update(_id, {
      title: todos.find((item) => item._id === _id)?.title,
    }).catch((err) => console.log(err));
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.container}>
              <div className={styles.inner}>
                <Header />
                <SearchTodo
                  searchTitle={(title: string) => setSearchTitle(title)}
                />
                <InputTodo addTodoProps={addTodoItem} />
                <TodoList
                  todos={todos}
                  updateTodoItemTitle={updateTodoItemTitle}
                  handleChangeProps={updateTodoItemStatus}
                  deleteTodoProps={deleteTodoItem}
                  setUpdate={setUpdatedTodoItem}
                />
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
