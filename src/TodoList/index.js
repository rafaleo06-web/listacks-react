import React from "react";
import "./TodoList.css";

function TodoList(props) {//component
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
