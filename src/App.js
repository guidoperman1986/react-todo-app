import React, {useState} from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { InputBox } from './components/InputBox';

function App() {
  
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo){
    setTodos(prevTodos=> {
      return [...prevTodos, newTodo]
    })
  }

  return (
    <div className="container">
      <TodoList className="todo" todos={todos}></TodoList>
      <InputBox onAdd={addTodo}></InputBox>
    </div>
  );
}

export default App;