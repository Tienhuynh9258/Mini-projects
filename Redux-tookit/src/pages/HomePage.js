import React from 'react';
import { Typography, Divider } from 'antd';
import TodoList from '../components/TodoList';
import Filters from '../components/Filters';
import {AiOutlineImport} from 'react-icons/ai';
import { Navigate } from 'react-router-dom';
import authSlice from '../redux/Slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
const { Title } = Typography;
const logoutstyle={
    Padding: '5px 10px',
    fontSize: '12px',
    lineHeight: 1.5,
    borderRadius: '3px',
    color: '#333',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    float:'right',
    marginRight:'10px'
}

export default function HomePage(){
  const dispatch=useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  function handlelogout(){
    dispatch(authSlice.actions.logoutUser());
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
    return(
        <div style={{padding:'40px 0',backgroundImage: "url(../assets/img/bg.png)"}}>
<button type='button' style={logoutstyle} onClick={handlelogout} >
<span><AiOutlineImport/></span>  
  Logout</button>
<div
        style={{
          width: 500,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: 20,
          boxShadow: '0 0 10px 4px #bfbfbf',
          borderRadius: 5,
          height: '90vh',
          
        }}
      >
        <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
        <Filters />
        <Divider />
        <TodoList />
      </div>
        </div>
        
    )
}