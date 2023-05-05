import React from "react";
import { useLocalStorage } from "./useLocalStorage";

{
  /* permite compartir datos entre componentes hijos en la jerarquía de componentes.*/
}
const TodoContext = React.createContext(); //todoContext: objeto con 2 propiedades: Provider y Consumer
{
  /* Provider: es un componente  se usa para proporcionar datos a los componentes que están en niveles inferiores en la jerarquía del árbol de componentes. Consumer: es un componente que se usa para consumir los datos proporcionados por el Provider */
}

//se utiliza para proporcionar los datos del contexto a los componentes secundarios.
function TodoProvider(props) {
  //useLocalStorage RETURN [item, saveItem] = [todos, saveTodos] DESTRUCTURING
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false); //false: modal is closed, true: modal is open

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (searchValue.length >= 1) {
    // input contain 1 or more letters
    searchedTodos = todos.filter((todo) => {
      /*each elemenet if true, ASSIGNED to searchedTodos[]*/
      const todoText = todo.text.toLowerCase(); //each element of array
      const searchText = searchValue.toLowerCase(); // letter of input
      return todoText.includes(searchText); //element of array CONTAIN letter of INPUT, RETURN true or false
    });
  } else {
    /*none letter or 0, render all elements */
    searchedTodos = todos;
  }

  const addTodo = (text) => {
    const newTodos = [...todos]; //copy array
    newTodos.push({
      completed: false,
      text: text,
    }); //delete element of array
    saveTodos(newTodos); //update array todos with newTodos(React re-render)
  };

  //TODO: React, se recomienda evitar mutar el estado directamente y en su lugar, se debe crear una copia del estado (const newTodos=[...todos])
  const toCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text); // fin index of element CHECKED
    const newTodos = [...todos]; //copy array
    newTodos[todoIndex].completed = true; //change completed to true of element
    saveTodos(newTodos); //update array todos with newTodos(React re-render)
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text); // fin index of element CHECKED
    const newTodos = [...todos]; //copy array
    newTodos.splice(todoIndex, 1); //delete element of array
    saveTodos(newTodos); //update array todos with newTodos(React re-render)
  };

  {
    /*return OBJECT "TodoContext.Provider" que envuelve a los componentes secundarios y proporciona el valor del contexto a través de la propiedad "value". */
  }
  return (
    <TodoContext.Provider //Provider: se establece un valor para el contexto, que se puede pasar a los componentes hijos a través de la propiedad VALUE. Cuando un componente hijo usa el CONSUMER, puede acceder al valor del contexto.
      value={{
        loading, //llaves {} used in JSX for indicatethe content is JavaScript.
        error, //prop key:variable(error)-value:prop(error)in AppUI.js,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {props.children}
      {/*props.children se utiliza para representar cualquier contenido que se pase como hijo del componente TodoProvider*/}
    </TodoContext.Provider> //props.children: si en otro componente se usa <TodoProvider><App /></TodoProvider>, el componente App se insertará dentro del componente TodoProvider en la posición {props.children}. {props.children} es una forma de pasar componentes hijos anidados, se refiere a <App /> en este caso.
  );
}

export { TodoContext, TodoProvider };
