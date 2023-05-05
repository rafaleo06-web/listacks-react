import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <> 
      <h1>LISTAKS</h1>
      <h2>
        Has completado {completedTodos} de {totalTodos} Tareas
      </h2>
    </>
  );
}

export { TodoCounter };
