import React from 'react'

function Todo({todo,index,deleteTodo}) {
  return (
    <div className="todo">
    <p>{todo}</p>
    <div className="action">
      <input type="checkBox" />
      <button onClick={()=>deleteTodo(index)}>Delete</button>
    </div>
  </div>
    )
}

export default Todo