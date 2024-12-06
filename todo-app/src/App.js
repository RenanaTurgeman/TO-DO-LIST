import './App.css';
import React, {useEffect, useState} from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false)
  const [allTodos, setTodos] = useState([])
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")

  const handleAddTodo = () =>{
    let newTodoItem = {
      title: newTitle,
      description: newDescription
    }

    let updateTodosArray = [...allTodos];
    updateTodosArray.push(newTodoItem);
    setTodos(updateTodosArray);
    localStorage.setItem('todolist', JSON.stringify(updateTodosArray))
  }

  const handleDeleteTodo = (index) =>{
    let updateTodos = [...allTodos]
    updateTodos.splice(index);
    localStorage.setItem('todolist', JSON.stringify(updateTodos));
    setTodos(updateTodos)
  };

  useEffect(()=>{
    let saveTodo = JSON.parse(localStorage.getItem('todolist'))
    if(saveTodo){
      setTodos(saveTodo);
    }
  }, [])
  
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div>
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder = "What's the task title?" />
          </div>
          <div>
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder = "What's the task description?" />
          </div>
          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add</button>
          </div>
        </div>

        <div className='btn-area'>
          <button className={`secondaryBtn ${isCompleteScreen === false ? 'active' : ''}`} 
          onClick={()=>setIsCompleteScreen(false)}>Todo</button>
          <button className={`secondaryBtn ${isCompleteScreen === true ? 'active' : ''}`} 
          onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>

        <div className='todo-list'>

         {allTodos.map((item, index)=>{
          return(
            <div className='todo-list-item' key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div>
                <AiOutlineDelete className='icon' onClick={()=>handleDeleteTodo(index)} title='Delete?'/>
                <BsCheckLg className='check-icon' title='Complete?'/>
              </div>
            </div>
          )
         })}
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
