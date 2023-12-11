import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo_item_container">
      {props.enteredText.map((todo) => {
        return (
          <div key={todo.id} className="todo_list">
            <h4>{todo.text}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
