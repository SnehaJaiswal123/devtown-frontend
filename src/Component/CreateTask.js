import React, { useState } from "react";
import "../Assets/Styles/task.css";
import axios from "axios";
import { useNavigate } from "react-router";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [due, setDue] = useState("");

  const navigate = useNavigate();

  const handleCreateTask = async () => {
    try {
      const userdata=localStorage.getItem('userdata')
      const id=JSON.parse(userdata).data.loggedInUser._id
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        `https://devtown-et7o.onrender.com/create/${id}`,
        {
          title,
          description,
          due,
        },
        config
      );
      console.log(response);
      navigate("/app");
    } catch (e) {
      console.log(e);
    }
  };

  return( 
    
     <>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text" class="form-control" id="recipient-name" onChange={(e)=>setTitle(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Description:</label>
            <textarea class="form-control" id="message-text" onChange={(e)=>setDesc(e.target.value)}></textarea>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Due-Date:</label>
           <input type="date" name="" id="" onChange={(e)=>setDue(e.target.value)} />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" >Cancel</button>
        <button type="button" class="btn btn-primary" onClick={handleCreateTask} data-dismiss="modal">Create Task</button>
      </div>
    </div>
  </div>
</div>
    
     </>
  )
  
};

export default CreateTask;
