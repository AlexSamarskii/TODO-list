import React from "react";

const TodoHeader = ({ todo }) => {
  const undoneTasks = todo.filter((todos) => !todos.checked);

  const today = new Date();
  const dateString = today.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ru-RU", { weekday: "long" });
  return (
    <div>
      <div style={{ fontSize: 50, textAlign:'center' }}>TO-DO-LIST</div>
      <h1>{dateString} {dayName}</h1>
      <h2>Осталось {undoneTasks.length} задач</h2>
    </div>
  );
};

export default React.memo(TodoHeader);