import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
function editindex(Todos){
  const newTodos=Todos.map((todo) => 
  { return {id:todo.id,index:Todos.indexOf(todo)+1,name:todo.name,complete:todo.complete} }
  )
  return newTodos
}
export const todoListSlice= createSlice({
  name: 'todoList',
  initialState:{
      todos:[]
  },
  reducers:{
    addNote:(state,action) => {
      const name=action.payload.ref.current.value
      if(name==='') return
      state.todos.push({id: uuidv4(), index: state.todos.length+1, name: name, complete: false})
      action.payload.ref.current.value=null
    },
    deleteNote:(state,action) => {
      const newTodos=[...state.todos]
      const todo=newTodos.find(todo => todo.id === action.payload)
      newTodos.splice(newTodos.indexOf(todo),1)
      state.todos=editindex(newTodos)
    },
    toggleNote:(state,action) => {
      const todo=state.todos.find(todo => todo.id===action.payload)
      todo.complete=!todo.complete
    },
    changeNameNote:(state,action) => {
      const todo=state.todos.find(todo => todo.id===action.payload.id)
      todo.name=action.payload.name
    },
    clearNotes:(state,action) => {
      const newTodos = state.todos.filter(todo => !todo.complete)
      state.todos=editindex(newTodos)
    },
    chooseAllNotes:(state,action) =>{
      const newTodos=state.todos.map((todo) => 
      { return {id:todo.id,index:todo.index,name:todo.name,complete:action.payload.tick}}
      )
      state.todos=newTodos
    },
    updownNotes:(state,action) =>{
      const newTodos = [...state.todos]
      const todo = newTodos.find(todo => todo.id === action.payload.id)
      const index=newTodos.indexOf(todo)
      if(action.payload.up===true){
        if(index===0) return
        newTodos.splice(index,1)
        const New=[...newTodos.slice(0,index-1),todo,...newTodos.slice(index-1)]
        state.todos=editindex(New)
      }
      else{
        if(index===newTodos.length) return 
        newTodos.splice(index,1)
        const New=[...newTodos.slice(0,index+1),todo,...newTodos.slice(index+1)]
        state.todos=editindex(New)
      }
    },
    updateNotes:(state,action) =>{
      state.todos=action.payload
    }
}
});

export const todoListActions=todoListSlice.actions;
export default todoListSlice.reducer;