import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos,dispatch}) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo}  dispatch={dispatch}
      />
    })//this same to the loop to return all elements 
  )
}
