import React from 'react'
import Todo from './Todo'

function TodoContainer({todos ,deleteTodo}) {
  return (
        <div className="Task-Container">
          {todos.map((todo,index)=>(
                <Todo todo={todo} index={index} deleteTodo={deleteTodo}/>
            
          ))}
        </div>  
        );
}

export default TodoContainer