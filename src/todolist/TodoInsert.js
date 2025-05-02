import React from "react";
import { Button, Input } from "antd";

const TodoInsert2 = ({ onSubmitHandler, todoInput, onChangeInput }) => {
  return (
    <form onSubmit={onSubmitHandler} style={{ display: "flex", marginBottom: 20 }}>
      <Input
        style={{ width: 500, fontSize: 20 }}
        onChange={onChangeInput}
        value={todoInput}
      />
      <Button htmlType="submit" size={"large"}>
        Добавить
      </Button>
    </form>
  );
};

export default TodoInsert2;