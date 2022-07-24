import React from "react";

function Task({ text, category, onDelete }) {
  function onClick(){
    onDelete(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={onClick} className="delete">X</button>
    </div>
  );
}

export default Task;
