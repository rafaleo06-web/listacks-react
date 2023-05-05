import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  //component
  // const [searchValue, setSearchValue] = React.useState(""); //valor inicial, useState is hook
  //useState es un hook que nos permite agregar estado a nuestros componentes funcionales. Recibe un parámetro que es el valor inicial del estado y retorna un arreglo con dos elementos: variable que representa el estado ACTUAL y una función setSearchValue() que nos permite actualizar ese estado.

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return ( //return array input y p, react needs a unique identifier each element
    <input
      key="todo-search-input"
      className="TodoSearch"
      placeholder="Buscar"
      value={searchValue}
      onChange={onSearchValueChange}
    />
    // ,<p key="search-value-display">{searchValue}</p>,
  );
}

export { TodoSearch };
