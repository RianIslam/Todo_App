import { useState } from 'react';
import './App.css';
import React from 'react'


function App() {

  const [toDoList,setToDoList] = useState([
    {text : 'Mow the law'},
    {text : 'Wash the car'},
    {text : 'Take out the trash'}
  ]);


  const [value,setValue] =useState('');

  const handleSubmit = (mouseClick) => {
    mouseClick.preventDefault();
    addToDo(value);
    setValue('');
  };



  const addToDo = (text) =>{
    const updatedToDoList = [...toDoList, {text}];
    setToDoList(updatedToDoList);
  }


  const handleDelete= (todo) =>{
   const fulterToDoList = toDoList.filter(currentToDoListValue => (currentToDoListValue !== todo));
   setToDoList(fulterToDoList);

  }



  return (
    <div className="App">
      <div className="toDoList">
          {
            toDoList.map((todo,index)=>(
              <span key={index}>
                <p>{todo.text}</p>
                <button onClick={()=>handleDelete(todo)}>Delete</button>

              </span>
            ))
          }
      </div>
      <div className="toDoInput">
          <form onSubmit={handleSubmit}>
            <input 
              placeholder='Type To-Do Here'
              value={value}
              onChange={keyboardStoke => setValue (keyboardStoke.target.value)}
            />
            <button type='submit'>Add TODO</button>
          </form>
      </div>
      
    </div>
  );
}

export default App;
