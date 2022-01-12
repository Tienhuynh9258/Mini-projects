import React, { useState, useRef, useEffect } from 'react';
import TodoList from '../components/TodoList'
import {useSelector, useDispatch} from 'react-redux'
import {todoListActions} from '../redux/Slices/todoListSlice';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
//import "react-toastify/dist/ReactToastify.css";
import 'antd/dist/antd.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos'// choose keyword no matter you want


function HomePage() {
  const {todos}= useSelector((state) => state.todoList)
  const dispatch = useDispatch()
  const [tick,setTick]=useState(false)
  const todoNameRef = useRef()// initialize a avariable that can reference to the input
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    //we get from localStorage and change from string to array
    if (storedTodos) dispatch(todoListActions.updateNotes(storedTodos))
    //setTodos(storedTodos)
  }, [])

  useEffect(() => {  
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    let notesElm = document.getElementById("mess");
    if(todos.length<=0) {
      notesElm.innerHTML=`Nothing to show! Use "Add a Note" section above to add notes.`
    }
    else notesElm.innerHTML=``
  }, [todos])// whenever this array change, we call function and store to the localStorage after changing to string
   
  function Load(){
    //process for loading to add a note
    let addButton= document.getElementById("addBtn");
    addButton.innerHTML=`
    <span class="spinner-border spinner-border-sm"></span>
    Process..`
    let loaded1 = document.getElementById("load1");
    loaded1.innerHTML=`<button class="btn btn-primary" disabled style="position: relative;top: 70%;left: 50%;">
    <span class="spinner-grow spinner-grow-sm"></span>
    Loading..
  </button>`
    setTimeout(()=> { addButton.innerHTML= `Add note`},2000)
    setTimeout(() => {loaded1.innerHTML=``},2000)
    setTimeout(() =>dispatch(todoListActions.addNote({ref:todoNameRef})),2000)
  }
  function Tick(){
    setTick(!tick)
    dispatch(todoListActions.chooseAllNotes({tick:!tick})) 
  }
  return (
    <> 
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
		     <div className="navbar-brand">
			   <p>THE NOTES TAKER</p>
         
      	 </div>
	    </nav>
      <Avatar size="large" icon={<UserOutlined />} style={{float:'right', margin:'10px'}}/>
	  <div className="container my-3">
		  <h1>Take your Notes here</h1>
		  <div className="card">
			  <div className="card-body">
				<h5 className="card-title">Add a Note</h5>
				<div className="form-group">
					<textarea ref={todoNameRef} className="form-control" id="addTxt" rows="3"></textarea>
				</div>
				<button onClick={() => Load()}  className="btn btn-primary" id="addBtn" style={{backgroundColor:'green'}}>
					Add Note
				</button>
			  </div>
		  </div>
		  <hr/>
		  <h1>Your Notes</h1>
      <button onClick={() => Tick()} className="btn btn-default" style={{backgroundColor: 'lightgray',marginLeft:'20px'}}>
					Choose all
			</button>
      <button onClick={() => dispatch(todoListActions.clearNotes())} className="btn btn-primary" style={{backgroundColor:'red',marginLeft:'20px'}}>
					Clear complete
			</button>
		  <hr/>
		  <div style={{marginLeft:'10px',fontStyle:'italic'}}
      >{todos.filter(todo => !todo.complete).length} left to do</div>
      <div id='mess'></div>
      <div id="load1"></div>
		  <div id="notes" className="row container-fluid">
      <TodoList todos={todos} /> 
      </div>
	  </div>
    </>
  )
}

export default HomePage;
