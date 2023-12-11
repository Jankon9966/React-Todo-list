import React from "react";

const TodoItem = (props) => {
  
  const deleteTaskItemHandler = ({ id }) => {
    props.setEnteredText(props.enteredText.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo_item_container">
      {props.enteredText.map((todo) => {
        return (
          <div key={todo.id} className="todo_list">
            <h4>{todo.text}</h4>
            <span onClick={() => deleteTaskItemHandler(todo)}>x</span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
