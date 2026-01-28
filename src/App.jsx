import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const [todo, settodo] = useState('')
  const [todos, settodos] = useState([])

  const edit = ()=>{

  }
  const dlt = ()=>{
    
  }
  const add = ()=>{
    settodos([...todos, {id:uuidv4(), todo, isCompleted : false}])
    settodo("")
  }
  const change = (e)=>{
    settodo(e.target.value)
  }

  return (
    <>
    <h1>TO-DO</h1>
    <div className="wrapper">
      <div className="addTodo">
        <h2>Add a Todo</h2>
        <input onChange={change} value={todo} type="text" />
        <button onClick={add}>Add</button>
        <h2>Your Todos</h2>
      </div>
      <div className="todos">
        {todos.map(item=>{
        return <div key={item.id} className="todo">
          <div className="text">
            {item.todo}
          </div>
          <div className="buttons">
            <button onClick={edit}>Edit</button>
            <button onClick={dlt}>Delete</button>
          </div>
        </div>
        })}
      </div>
    </div>
    </>
  )
}

export default App
