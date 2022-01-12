import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
export default function TodoList({todos}) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo} 
      />
    })
  )
}