import React, { useState, useRef, useEffect,useReducer } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

export const ACTIONS={
  ADD: 'add',
  DELETE: 'delete',
  CLEAR: 'clear',
  TOGGLE: 'toggle',
  UPDATE: 'update_state',
  CHANGE: 'change_name'

}
const LOCAL_STORAGE_KEY = 'todoApp.todos'// choose keyword no matter you want

//For edit the number of notes when having delete
function editindex(Todos){
  const newTodos=Todos.map((todo) => 
  { return {id:todo.id,index:Todos.indexOf(todo)+1,name:todo.name,complete:todo.complete} }
  )
  return newTodos
}

function reducer(todos,action){
   switch(action.type){
     case ACTIONS.ADD:{
      const name=action.payload.ref.current.value
      if(name==='') return
      const newTodos=[...todos,{id: uuidv4(), index: todos.length+1, name: name, complete: false}]
      action.payload.ref.current.value=null
      return newTodos
     }
     case ACTIONS.DELETE:{
      const newTodos=[...todos]
      const todo=newTodos.find(todo => todo.id === action.payload)//in this, payload is id
      //in payload, we can pass directly the variable(payload: id) or a sequence of variable(payload:{id:id,name:name})
      newTodos.splice(newTodos.indexOf(todo),1)
      return editindex(newTodos)
     }  
     case ACTIONS.TOGGLE:{
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === action.payload)
      todo.complete = !todo.complete
      return newTodos
     }
     case ACTIONS.CHANGE:{
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === action.payload.id)
      todo.name=action.payload.name
      return newTodos
     }
     case ACTIONS.CLEAR:{
      const newTodos = todos.filter(todo => !todo.complete)
      return editindex(newTodos)
     }
     case ACTIONS.UPDATE:
       return action.payload
     default:
       return todos  
   }
}


function App() {
  //const [todos, setTodos] = useState([])//initialize a D structure using useState()
  const [todos,dispatch]=useReducer(reducer,[])
  const todoNameRef = useRef()// initialize a avariable that can reference to the input
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //we get from localStorage and change from string to array
    if (storedTodos) dispatch({type:ACTIONS.UPDATE,payload:storedTodos})
    //setTodos(storedTodos)
  }, [])// this useEffect use for after refreshing the page, after having the change in this empty array and use function, and because
  //it can't change so we always get from the beginning

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    let notesElm = document.getElementById("mess");
    if(todos.length<=0) {
      notesElm.innerHTML=`Nothing to show! Use "Add a Note" section above to add notes.`
    }
    else notesElm.innerHTML=``
  }, [todos])// whenever this array change, we call function and store to the localStorage after changing to string

  return (
    <> 
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
		     <div className="navbar-brand">
			   <p style={{Fontsize:'30px'}}>THE NOTES TAKER</p>
      	 </div>
	    </nav>

	  <div className="container my-3">
		  <h1>Take your Notes here</h1>
		  <div className="card">
			  <div className="card-body">
				<h5 className="card-title">Add a Note</h5>
				<div className="form-group">
					<textarea ref={todoNameRef} className="form-control" id="addTxt" rows="3"></textarea>
				</div>
				<button onClick={() => dispatch({type:ACTIONS.ADD,payload:{ref:todoNameRef}})} className="btn btn-primary" id="addBtn" style={{backgroundColor:'green'}}>
					Add Note
				</button>
			  </div>
		  </div>
		  <hr/>
		  <h1>Your Notes</h1>
      <button onClick={() => dispatch({type:ACTIONS.CLEAR})} className="btn btn-primary" style={{backgroundColor:'red',marginLeft:'20px'}}>
					Clear complete
				</button>
		  <hr/>
		  <div style={{marginLeft:'10px',fontStyle:'italic'}}
      >{todos.filter(todo => !todo.complete).length} left to do</div>
      <div id='mess'></div>
		  <div id="notes" className="row container-fluid">
      <TodoList todos={todos} dispatch={dispatch}/> 
      </div>
	  </div>
    </>
  )
}

export default App;
