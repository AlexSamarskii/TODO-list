import React, { useState, useRef, useCallback } from "react";
import Todolist2 from "./Todolist";
import TodoInsert2 from "./TodoInsert";
import TodoHeader from "./TodoHeader";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  let nextId = useRef(1);
  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (!todoInput) {
        alert("Введите задачу");
        return;
      }
      const todos = { id: nextId.current++, text: todoInput, checked: false };

      setTodo(todo.concat(todos));
      localStorage.setItem("todo", JSON.stringify(todo.concat(todos)));
      setTodoInput("");
    },
    [todo, todoInput]
  );

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
    console.log(e.target.value);
  };

  const onDeleteHandler = useCallback(
    (todoId) => {
      setTodo(todo.filter((todos) => todos.id !== todoId));
      localStorage.setItem(
        "todo",
        JSON.stringify(todo.filter((todos) => todos.id !== todoId))
      );
    },
    [todo]
  );

  const onCheckToggleHandler = useCallback(
    (todoId) => {
      setTodo(
        todo.map((todos) =>
          todos.id === todoId ? { ...todos, checked: !todos.checked } : todos
        )
      );
      console.log(todo);
    },
    [todo]
  );

  const onEditHandler = useCallback(
    (todoId, editedText) => {
      setTodo(
        todo.map((todos) =>
          todos.id === todoId ? { ...todos, text: editedText } : todos
        )
      );
      setTodoInput("");
    },
    [todo]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TodoHeader todo={todo} />
      <TodoInsert2
        onSubmitHandler={onSubmitHandler}
        onChangeInput={onChangeInput}
        todoInput={todoInput}
      />
      <div style={{ overflowY: "auto", height: 650 }}>
        <Todolist2
          todo={todo}
          onDeleteHandler={onDeleteHandler}
          onCheckToggleHandler={onCheckToggleHandler}
          onEditHandler={onEditHandler}
        />
      </div>
    </div>
  );
};

export default Todo;