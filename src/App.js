import React, { useState } from 'react';
import './App.css';
import { ButtonRemove, ButtonCompleted } from './styled-components'

function Todo({todoitem, isCompleted, index, removeTodo}) {
  return (
    <div 
      style={{display:'flex', justifyContent:'space-between'}}
    >
      <div className="todo" style={{flexGrow:2}}>
        {`${index} - ${todoitem.text}`}
      </div>
      <ButtonCompleted 
        onClick={ () => removeTodo(index)}
        title="Task completed"
      >
        <i class="fas fa-check"></i>
      </ButtonCompleted>
      <ButtonRemove 
        onClick={ () => removeTodo(index)}
        title="Remove todo item"
      >
        <i class="fas fa-times"></i>
      </ButtonRemove>
    </div>  
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('')
  
  const handleSumbit = e => {
    e.preventDefault();
    if ( !value ) return
    addTodo(value)
    setValue('')
  }

  return (
    <form className="todo-form" onSubmit={handleSumbit}>
      <input 
        className="todo-input" 
        type="text" 
        placeholder="type a todo item"
        value={value}
        onChange={ e => setValue(e.target.value)}
      />
    </form>  
  )  
} 

function App() {
  const [todos, setTodos] = useState([
    {
      text:'first todo item',
      isCompleted:false
    }  
  ])
  const addTodo = todoItem => {
    const newTodos = [...todos, {text:todoItem, isCompleted:false}] 
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <div className="todo-content">
      <div className="todo-list">
        {todos.map((todoitem,index) => {
          return (
            <Todo 
              key={index} todoitem={todoitem} index={index}
              removeTodo={removeTodo}
            />
          )
        })}
        
      </div>  
      <div>
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>  
  );
}

export default App;
