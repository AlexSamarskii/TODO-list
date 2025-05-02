import React from "react";
import "./TodoInsert.scss";
import "./TodoListItem.scss";
import TodoList from "./TodoList";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";

const Todos = ({
  input, 
  todos, 
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} onChangeInput={onChangeInput} input={input} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default Todos;