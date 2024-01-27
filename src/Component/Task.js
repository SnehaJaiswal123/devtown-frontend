import React, { useEffect } from "react";
import '../Assets/Styles/task.css'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Task = (props) => {

  const navigate=useNavigate()

  const handleDeleteTask=async()=>{
    await axios.delete(`https://devtown-et7o.onrender.com/delete/${props.id}`)
    navigate('/app')
  }

  return (
    <div class="card">
    <div class="card-header">
    <HourglassEmptyIcon/>
    Due-Date:
    {props.due}
    </div>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <button type="button" class="btn btn-outline-danger" onClick={handleDeleteTask}>Delete Task</button>
      <button type="button" class="btn btn-outline-secondary">Edit Task</button>
    </div>
    </div>
   
  );
};

export default Task;
