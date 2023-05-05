// import logo from "./logo.svg";
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
// import "./App.css";

function App() {
  //component

  return (
    <TodoProvider>{/*Provider para establecer el valor del contexto con los datos de usuario, */}
      <AppUI />{/*Consumer: componente hijo usa el Consumer, puede acceder al valor del contexto. */}
    </TodoProvider>
  );
}

export default App;

//TODO: {props.children} se utiliza para representar cualquier contenido que se pase como hijo del componente App
