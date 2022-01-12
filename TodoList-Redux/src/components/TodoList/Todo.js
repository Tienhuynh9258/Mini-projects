import React,{useRef,useState} from 'react'
import '../../styles/Todo.css'
import Modal from '../Modal'
import { useDispatch } from 'react-redux';
import {todoListActions} from '../../redux/Slices/todoListSlice';
import  DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
export default function Todo({todo}) {
  const dispatch=useDispatch()
  const editName = useRef()// initialize a avariable that can reference to the input
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="noteCard my-2 mx-2 card" style={{width: '18rem'}}>
				<div className="card-body">
        <span className='downarrow' onClick={() => dispatch(todoListActions.updownNotes({id:todo.id,up:false}))}></span>
        <span className='upparrow' onClick={() => dispatch(todoListActions.updownNotes({id:todo.id,up:true}))}></span>
        <input type="checkbox" checked={todo.complete} onChange={() => dispatch(todoListActions.toggleNote(todo.id))} />
          <h5 className="card-title">Note {todo.index}</h5>
          
				<input ref={editName} type="text" className="card-text" value={todo.name} onChange={() => dispatch(todoListActions.changeNameNote({id:todo.id,name:editName.current.value}))} style={{border:0,marginBottom:'10px'}}/>
				<DatePicker selected={selectedDate} className='datei' width='80%'
          onChange={date => setSelectedDate(date)}
          dateFormat='dd/MM/yyyy'
          filterDate={date => date>= Date.now()}
          isClearable
          placeholderText='choose Date'
         //showTimeSelect
          />
        <button type="button" id={todo.index} data-toggle="modal" data-target="#myModal" className="btn btn-primary" 
        >
					Delete Note
				</button>
        <Modal todo={todo}/>
			</div>
		</div>
  )
}
