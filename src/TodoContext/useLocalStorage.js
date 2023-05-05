import React from "react";

// almacena el arr []todos en localStorage con la clave "TODOS_V1"
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);//('<p>Estamos cargando, no desesperes...</p>')
  const [item, setItemState] = React.useState(initialValue); //initialValue: ARR[] empty

  React.useEffect(() => {//useEffect: realiza efectos secundarios después de que se actualiza el DOM

    setTimeout(() => {//AFTER is 1.5 segundos, update state loading a false, ('<p>¡Crea tu primer TODO!</p>')
      try {
        const localStorageItem = localStorage.getItem(itemName); //string
        let parsedItem;

        if (!localStorageItem) {
          //Si el valor no existe
          localStorage.setItem(itemName, JSON.stringify(initialValue)); //convert to string
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem); //convert string to ARR, assign to parsedItem[] empty
        }
        setItemState(parsedItem); //update state of component
        setLoading(false);//
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  //función puente update LOCALSTORAGE,
  const saveItem = (newItem) => {
    try {
      //newItem is arr[newTodos]
      const stringifiedItem = JSON.stringify(newItem); //convert
      localStorage.setItem(itemName, stringifiedItem);
      setItemState(newItem); //update state of component
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error }; //return item(array[{}]) y saveItem(function update)
}

export { useLocalStorage };