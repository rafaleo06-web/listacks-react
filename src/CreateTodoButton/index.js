import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({openModal, setOpenModal}){//component
  const onClickButton=()=>{
    //if openModal is FALSE, change render Modal in view. If openModal is true, change render nothing in view 
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  } //OR simplified: const onClickButton=()=>setOpenModal(!openModal);

  return(
    <button className="CreateTodoButton" onClick={onClickButton} >
      +
    </button>
  )
}

export { CreateTodoButton };