import React from 'react';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconTypes = {//object
  "check": color => (//key: value function
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {//color: gray is default value, CLICK en icono
  return (//render SPAN
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}//onclick is 'onComplete', change completed is true
    >
      {iconTypes[type](color)}{/*simbol () hacen FUNCION EJECUTED,color is argument*/}
      {/* return componente SVG con el color especificado */}
    </span>
  );
}

export { TodoIcon };