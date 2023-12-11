import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { DUMMY_TODO_ITEMS } from "../utils/dummyData";

const TodoList = () => {

  const [input, setInput] = useState("");
  const [enteredText, setEnteredText] = useState([]);

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredText([
      ...enteredText,
      { id: Math.floor(Math.random() * 10000), text: input },
    ]);

    setInput("");
  };

  return (
    <div className="container">
      <h1>
        To<span>Do</span> List
      </h1>
      <form className="form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Add a new item"
          onChange={onChangeHandler}
          value={input}
        />
        <button className="form_btn">Add</button>
      </form>
      <TodoItem enteredText={enteredText} setEnteredText={setEnteredText} />
    </div>
  );
};

export default TodoList;
