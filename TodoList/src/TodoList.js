import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos,
   //toggleTodo, deleteTodo, changeName 
   dispatch
  }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo} 
      //toggleTodo={toggleTodo}  deleteTodo={deleteTodo} changeName={changeName} 
      dispatch={dispatch}
      />
    })//this same to the loop to return all elements 
  )
}
