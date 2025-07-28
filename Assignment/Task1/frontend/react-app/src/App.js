import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskFirst from './Tasks/TaskFirst';
import TaskSecond from './Tasks/TaskSecond';
import TaskThird from './Tasks/TaskThird';
import TaskFourth from './Tasks/TaskFourth';
import Dashboard from './Tasks/Dashboard';
import TaskFifth from './Tasks/TaskFifth';
import Sidebar from './Sidebar';

function App() {

  return (
    <Router>
      <Routes>
        
        <Route
          path="/*"
          element={
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-2 bg-light vh-100">
                    <Sidebar />
                  </div>
                  <div className="col-md-10 p-4">
                    <Routes>
                      <Route path="/task-first" element={<TaskFirst />} />
                      <Route path="/task-second" element={<TaskSecond />} />
                      <Route path="/task-third" element={<TaskThird />} />
                      <Route path="/task-fourth" element={<TaskFourth />} />
                      <Route path="/task-fifth" element={<TaskFifth />} />

                      <Route path="/" element={<Dashboard/>} />
                    </Routes>
                  </div>
                </div>
              </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
