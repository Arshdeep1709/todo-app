import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const [todo, settodo] = useState('')
  const [todos, settodos] = useState([])

  useEffect(() => {
    let todoString = localStorage.getItem('todos')
    if(todoString){
    let todos = JSON.parse(localStorage.getItem('todos'))
    settodos(todos)
    }
  }, [])

  const saveLocalStorage = ()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  }

  const edit = (e,id)=>{
    let t = todos.filter(item=>item.id === id)
    settodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    settodos(newTodos)
    saveLocalStorage()
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
  const dlt = (e,id)=>{
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    settodos(newTodos)
    saveLocalStorage()
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const add = ()=>{
    settodos([...todos, {id:uuidv4(), todo, isCompleted : false}])
    settodo("")
    saveLocalStorage()
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
        <button onClick={add} disabled={todo.length <= 3}>Add</button>
        <h2>Your Todos</h2>
      </div>
      <div className="todos">
        {todos.length === 0 && <div className='ntd'> Nothing to display</div>}
        {todos.map(item=>{
        return <div key={item.id} className="todo">
          <div className="text">
            {item.todo}
          </div>
          <div className="buttons">
            <button onClick={(e)=>{edit(e,item.id)}}>Edit</button>
            <button onClick={(e)=>{dlt(e,item.id)}}>Delete</button>
          </div>
        </div>
        })}
      </div>
    </div>
    </>
  )
}

export default App
