import React, { useState } from 'react';
import './App.css';
import './Grid.css';
import { ButtonRemove, ButtonCompleted, ButtonUndo } from './styled-components'

function Todo({todoitem, isCompleted, index, removeTodo, completeTodo, undoTodo}) {
  return (
    <div 
      style={{display:'flex', justifyContent:'space-between'}}
    >
    <div className={todoitem.isCompleted ? "todo-complete" : "todo"} style={{flexGrow:2}}>
      <span>
        {`${index} - ${todoitem.text}`}
      </span>  
    </div>
    { todoitem.isCompleted
      ? <ButtonUndo 
        onClick={ () => undoTodo(index)}
        title="Undo task completed"
      >
        <i class="fas fa-undo"></i>
      </ButtonUndo>
      : <ButtonCompleted 
          onClick={ () => completeTodo(index)}
          title="Task completed"
        >
          <i class="fas fa-check"></i>
        </ButtonCompleted>    }  
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

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const undoTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = false
    setTodos(newTodos)
  }

  return (
    <div>
    <div className="todo-content">
      <div className="todo-list">
        {todos.map((todoitem,index) => {
          return (
            <Todo 
              key={index} todoitem={todoitem} index={index}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              undoTodo={undoTodo}
            />
          )
        })}
        
      </div>  
      <div>
        <TodoForm addTodo={addTodo}/>
      </div>
    </div> 
    <main>
      <header>
        <h3>Header</h3>
        <p>contenido del header</p>
      </header>
      <aside>Izquierda</aside>  
      <article>Contenido</article>
      <aside>Derecha</aside>  
      <footer>Footer</footer>
    </main>
    </div>
  );
}

export default App;
