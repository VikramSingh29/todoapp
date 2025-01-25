"use client"
import React,{useEffect, useState} from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


const page = () => {
  const [todo, setTodo] = useState([]);

  // Get todo from local storage
  useEffect(() => {
    const storedTodos =JSON.parse(localStorage.getItem("todo"))||[]; 
    setTodo(storedTodos);
  }, []);

  // Save todo to local storage
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const addTodo = (newtodo) => {
    if (newtodo.trim() === "") {
      alert("Todo cannot be empty");
      return;
    }
   
    setTodo([...todo, newtodo]);
    console.log("Todos:", newtodo);

  }
  //editing todo
  const editTodo = (indexToEdit, updatedTodo) => {
    const newTodo = todo.map((item, index) =>
      index === indexToEdit ? updatedTodo : item
    );
    setTodo(newTodo); 
  };
  
  //deleting todo
  const deleteTodo = (indexToDelete) => {
    const newTodo = todo.filter((_, index) => index !== indexToDelete);
    setTodo(newTodo);
  };
  
  
  return (
    <>
      <div className='container mx-auto '>
        <h1 className='text-4xl font-bold my-8 text-center text-white'>Todo App</h1>
      </div>
      <TodoInput addTodo={addTodo}/>
      <div className='container w-[60vw] mx-auto my-8'>
      <TodoList todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
    </>
  );
};

export default page;