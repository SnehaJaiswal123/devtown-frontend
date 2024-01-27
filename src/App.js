import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './Component/Login'
import Main from './Component/Main'
import Task from './Component/CreateTask'
import CreateTask from './Component/CreateTask'




const App = () => {
  return (
    <div className="App">
      
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/app' element={<Main/>}/>
            <Route path='/create' element={<CreateTask/>}/>
            {/* <Route path='app' element={<Main/>}>
               <Route path='chat' element={<ChatArea/>}/>
               <Route path='' element={<Welcome/>}/>
               <Route path='users' element={<Users/>}/>
               <Route path='creategroup' element={<Group/>}/>
            </Route> */}
        </Routes>
      </div>
  )
}

export default App
