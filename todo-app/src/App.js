import './App.css';
import React, {useEffect, useState} from 'react'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs';
import { FaPen } from "react-icons/fa6";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false)
  const [allTodos, setTodos] = useState([])
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [completedTodo, setCompletedTodo] = useState([])
  const [currentEdit, setCurrentEdit] = useState("")
  const [currentEditedItem, setCurrentEditedItem] = useState("")

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
    updateTodos.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(updateTodos));
    setTodos(updateTodos)
  };

  const handleEdit = (index, item)=>{
    setCurrentEdit(index);
    setCurrentEditedItem(item)
  }

  const handleUpdateTodo = () => {
    let updateTodos = [...allTodos];
    updateTodos[currentEdit] = currentEditedItem;
    localStorage.setItem('todolist', JSON.stringify(updateTodos));
    setTodos(updateTodos)
    setCurrentEdit("")
  }

  const handleUpdateTitle = (value) =>{
    setCurrentEditedItem((prev)=>{
      return {...prev,title:value}
    })
  }

  const handleUpdateDescription = (value) =>{
    setCurrentEditedItem((prev)=>{
      return {...prev,description:value}
    })
  }

  const handleCompleteTodo = (index) =>{
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth();
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + '-' + mm + '-' + yyyy + 'at' + h + ':' +m + ':'+s;

    let filteredUtem = {
      ...allTodos[index],
      completedOn: completedOn
    }

    let updatedCompleteArr = [...completedTodo];
    updatedCompleteArr.push(filteredUtem);
    setCompletedTodo(updatedCompleteArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompleteArr));

  }

  const handleDeleteCompletedTodo = (index)=>{
    let updateTodos = [...completedTodo]
    updateTodos.splice(index, 1); // 1 sign we only want to delete one item
    localStorage.setItem('completedTodos', JSON.stringify(updateTodos));
    setCompletedTodo(updateTodos)
  }
  useEffect(()=>{
    let saveTodo = JSON.parse(localStorage.getItem('todolist'))
    let saveCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'))
    if(saveTodo){
      setTodos(saveTodo);
    }if(saveCompletedTodo){
      setCompletedTodo(saveCompletedTodo);
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

         {isCompleteScreen === false && allTodos.map((item, index)=>{
          if(currentEdit===index) {
            return(
              <div className='edit_wrapper' key={index}>
              <input placeholder='Update Title' 
              onChange={(e)=>handleUpdateTitle(e.target.value)} 
              value={currentEditedItem.title}/>
              <textarea placeholder='Update Title' 
              rows={4}
              onChange={(e)=>handleUpdateDescription(e.target.value)} 
              value={currentEditedItem.description}/>
              <button type='button' onClick={handleUpdateTodo} className='primaryBtn'>Update</button>
            </div>
            )
          }
          else{
            return(
              <div className='todo-list-item' key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
  
                <div>
                  <AiOutlineDelete className='icon' onClick={()=>handleDeleteTodo(index)} title='Delete?'/>
                  <BsCheckLg className='check-icon' onClick={()=>handleCompleteTodo(index)} title='Complete?'/>
                  <AiOutlineEdit className='update-icon' onClick={()=>handleEdit(index, item)} title='edit?'/>
                </div>
              </div>
            )
          }
         })}

          {isCompleteScreen === true && completedTodo.map((item, index)=>{
          return(
            <div className='todo-list-item' key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><small>Completed on:{item.completedOn}</small></p>
              </div>

              <div>
                <AiOutlineDelete className='icon' 
                onClick={()=>handleDeleteCompletedTodo(index)} title='Delete?'/>
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
