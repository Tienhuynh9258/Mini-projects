import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo, deleteTodo, changeName }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} deleteTodo={deleteTodo} changeName={changeName} />
    })//this same to the loop to return all elements 
  )
}
