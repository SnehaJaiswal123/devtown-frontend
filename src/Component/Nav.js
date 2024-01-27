import React, { useState } from "react";
import "../Assets/Styles/Nav.css";
import { Link } from "react-router-dom";
import CreateTask from "./CreateTask";

const Nav = () => {
  return (
    <>
    <div className="main-nav">
      <div className="logo">Task Manager</div>
      <div className="nav-right">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Task</button>
      <CreateTask/>
        <a
          href="#"
          class="btn btn-secondary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          LogOut
        </a>
      </div>

    </div>
    </>
  );
};

export default Nav;
