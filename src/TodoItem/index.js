import React from "react";
import "./TodoItem.css";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodoItem(props) {
  //component

  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };

//TODO: ${props.completed && 'Icon-check--active'} es una condición que se ejecuta si props.completed es true, entonces ADD class 'Icon-check--active'
//si unaCondicion es un valor “falsy” (' ', 0 o null) , no se evalúa el segundo elemento y return false. Por el contrario, si unaCondicion es “truthy” entonces evaluará el segundo elemento y lo retornará
