import React from 'react'
import { ACTIONS } from './App'
export default function Modal({todo,dispatch}) {
    return (
        <div>
  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Delete a note</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body">
          Are you sure about this?
        </div>
        
        <div className="modal-footer">
          <button type="button" className="btn btn-success" onClick={() => dispatch({type:ACTIONS.DELETE,payload:todo.id})} data-dismiss="modal">Yes</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
        </div>
    )
}
