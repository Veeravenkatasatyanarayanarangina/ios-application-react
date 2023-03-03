import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Dashboard.css";

const InterviewerDashboard = () => {
   
  return (
    <>
    <nav className='sidenav shadow-right sidenav-light'>
    <div className='sidenav-menu'>

<div className='profile text-center '>
    <div className="shadow sidebar-patient">
      <div>
        <div className="profile text-center " >
         
          <div className="my-3">
            <h4>InterviewerDashboard</h4>
          </div>
        </div>
        <div className="sidebar-nav">
          <ul className="nav nav-pill flex-column mb-auto">


            <li className="nav-item p-1">
              <NavLink className="nav-link" to="/studentsinfo">
                <i className="bi bi-calendar-check-fill m-2"></i> Students Info
                
              </NavLink>
            </li>

            <li className="nav-item p-1">
              <NavLink className="nav-link " to="/viewstatus">
                <i className="bi bi-list m-2"></i> View Status
              </NavLink>
            </li>
            <li className="nav-item p-1">
              <NavLink className="nav-link " to="/gd">
                <i className="bi bi-wallet2 m-2"></i> GD results
              </NavLink>
            </li>
            <li className="nav-item p-1">
              <NavLink className="nav-link " to="test">
              <i class="bi bi-clock-history m-2"></i>  Test results
              </NavLink>
             
            </li>
            <li className='nav-item p-1'>

              <NavLink className='nav-link ' to='analytics'>

                <i className='bi bi-bar-chart m-2'></i> Analytics

              </NavLink>

            </li>
            <li className="nav-item p-1">
              <NavLink className="nav-link " to="/departments">
              <i className="bi bi-person m-2"></i> Departments
              </NavLink>
            </li>
            <li className="nav-item p-1">
              <NavLink className="nav-link " to="/settings">
              <i className="bi bi-pencil-square m-2"></i> Settings
              </NavLink>
            </li>
            
            <li className="nav-item p-1">
             
              <NavLink className="nav-link " to="/changepassword">
              <i className="bi bi-lock m-2"></i> Change Password
              </NavLink>
            </li>
            <li className="nav-item p-1">
             
              <NavLink className="nav-link " to="/help">
              <i class="bi bi-question-circle m-2"></i> Help
              </NavLink>
            </li>
            
            <li className="nav-item p-1">
              <NavLink className="nav-link" to="/" >
                <i className="bi bi-box-arrow-right m-2"></i> Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
    </nav>
  </>
  )
}

export default InterviewerDashboard