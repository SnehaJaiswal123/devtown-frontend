import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import Task from "./Task";
import CreateTask from "./CreateTask";

const Main = () => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const getTask = async () => {
      try{
        const userdata=localStorage.getItem('userdata')
        const id=JSON.parse(userdata).data.loggedInUser._id
        const tasks = await axios.get(`https://devtown-et7o.onrender.com/tasks/${id}`);
        setTasks(tasks.data);
        console.log(tasks.data);
      }
      catch(err){
        console.log(err);
      }
    };
    getTask();
  }, []);
  return (
    <div className="app-main">
      <Nav/>
      <div className="task-main">
        {tasks.map((t) => (
          <Task title={t.title} desc={t.description} due={t.due} id={t._id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
