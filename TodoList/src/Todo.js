import React,{useRef} from 'react'
import { ACTIONS } from './App'
export default function Todo({ todo,dispatch}) {
  const editName = useRef()// initialize a avariable that can reference to the input

  return (
    <div className="noteCard my-2 mx-2 card" style={{width: '18rem'}}>
				<div className="card-body">
        <input type="checkbox" checked={todo.complete} onChange={() => dispatch({type:ACTIONS.TOGGLE,payload:todo.id})} />
					<h5 className="card-title">Note {todo.index}</h5>
					<input ref={editName} type="text" className="card-text" value={todo.name} onChange={() => dispatch({type:ACTIONS.CHANGE,payload:{id:todo.id,name:editName.current.value}})} style={{border:0,marginBottom:'10px'}}/>
				<button id={todo.index} className="btn btn-primary" onClick={() => dispatch({type:ACTIONS.DELETE,payload:todo.id})}>
					Delete Note
				</button>
			</div>
		</div>
  )
}
