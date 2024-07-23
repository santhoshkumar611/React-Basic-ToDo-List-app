import React from 'react'

function InputContainer({inputVal,writeTodo,addTodo}) {
  return (
        <div className="input-Container">
          <input type="text" placeholder="Enter the Task"  value={inputVal} onChange={writeTodo} />
          <button onClick={addTodo}>+</button>
        </div>  )
}

export default InputContainer