import React,{useRef} from 'react'
import '../../styles/Todo.css'
import Modal from '../Modal'
import { useDispatch } from 'react-redux';
import todoListSlice from '../../redux/Slices/todoListSlice';
export default function Todo({todo}) {
  const dispatch=useDispatch()
  const editName = useRef()// initialize a avariable that can reference to the input

  return (
    <div className="noteCard my-2 mx-2 card" style={{width: '18rem'}}>
				<div className="card-body">
        <span className='downarrow' onClick={() => dispatch(todoListSlice.actions.updownNotes({id:todo.id,up:false}))}></span>
        <span className='upparrow' onClick={() => dispatch(todoListSlice.actions.updownNotes({id:todo.id,up:true}))}></span>
        <input type="checkbox" checked={todo.complete} onChange={() => dispatch(todoListSlice.actions.toggleNote(todo.id))} />
					<h5 className="card-title">Note {todo.index}</h5>
					<input ref={editName} type="text" className="card-text" value={todo.name} onChange={() => dispatch(todoListSlice.actions.changeNameNote({id:todo.id,name:editName.current.value}))} style={{border:0,marginBottom:'10px'}}/>
				<button type="button" id={todo.index} data-toggle="modal" data-target="#myModal" className="btn btn-primary" 
        >
					Delete Note
				</button>
        <Modal todo={todo}/>
			</div>
		</div>
  )
}
