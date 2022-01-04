import React,{useRef} from 'react'

export default function Todo({ todo, toggleTodo, deleteTodo, changeName }) {
  const editName = useRef()// initialize a avariable that can reference to the input

  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  function handleDelete(){
    deleteTodo(todo.id)
  }
  function handleEdit(){
    console.log(editName.current.value)
    changeName(todo.id,editName.current.value)
  }
  return (
    <div className="noteCard my-2 mx-2 card" style={{width: '18rem'}}>
				<div className="card-body">
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
					<h5 className="card-title">Note {todo.index}</h5>
					<input ref={editName} type="text" className="card-text" value={todo.name} onChange={handleEdit} style={{border:0}}/>
				<button id={todo.index} className="btn btn-primary" onClick={handleDelete}>
					Delete Note
				</button>
			</div>
		</div>
  )
}
