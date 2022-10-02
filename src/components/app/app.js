import React, { useState } from "react";

import TaskHeader from "../task-header/task-header";
import TaskList from "../task-list/task-list";
import TaskAddForm from "../task-add-form/task-add-form";

function App() {

  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : { ...task }
      )
    ]);
  };

  const completed = todos.filter(item => item.complete).length;
  const nocompleted = todos.filter(item => !(item.complete)).length;



  return (
    <div className="app max-w-screen-md	mx-auto my-8">
      <TaskHeader completed={completed} nocompleted={nocompleted} />
      <TaskList todos={todos} removeTask={removeTask} handleToggle={handleToggle} />
      <TaskAddForm removeTask={removeTask} handleToggle={handleToggle} addTask={addTask} />
    </div>
  );
}

export default App;
