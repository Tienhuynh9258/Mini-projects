import React,{useRef} from 'react'
import './Todo.css'
import Modal from './Modal'
import { ACTIONS } from './App'
export default function Todo({ todo,dispatch,todos}) {
  const editName = useRef()// initialize a avariable that can reference to the input

  return (
    <div className="noteCard my-2 mx-2 card" style={{width: '18rem'}}>
				<div className="card-body">
        <span className='downarrow' onClick={() => dispatch({type:ACTIONS.UPDOWN,payload:{id:todo.id,up:false}})}></span>
        <span className='upparrow' onClick={() => dispatch({type:ACTIONS.UPDOWN,payload:{id:todo.id,up:true}})}></span>
        <input type="checkbox" checked={todo.complete} onChange={() => dispatch({type:ACTIONS.TOGGLE,payload:todo.id})} />
					<h5 className="card-title">Note {todo.index}</h5>
					<input ref={editName} type="text" className="card-text" value={todo.name} onChange={() => dispatch({type:ACTIONS.CHANGE,payload:{id:todo.id,name:editName.current.value}})} style={{border:0,marginBottom:'10px'}}/>
				<button type="button" id={todo.index} data-toggle="modal" data-target="#myModal" className="btn btn-primary" 
        // onClick={() => dispatch({type:ACTIONS.DELETE,payload:todo.id})}
        >
					Delete Note
				</button>
        <Modal todo={todo} dispatch={dispatch}/>
			</div>
		</div>
  )
}
