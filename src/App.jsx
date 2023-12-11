import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="app">
      <div className="app_container">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
