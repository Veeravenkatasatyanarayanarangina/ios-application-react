import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Departments from './Components/departments';
import StudentRegister from './Components/StudentRegsiter';
import StudentsCountByDept from './Components/StudentsCountByDept';
import JavaApplicantsCount from "./NoOfCounts/JavaApplicantsCounts";
import QaApplicantsCounts from './NoOfCounts/QaApplicantsCounts';
import UiApplicantsCounts from './NoOfCounts/UiApplicantsCounts';
import DevopsApplicantsCounts from './NoOfCounts/DevopsApplicantsCounts';
import DataEnginnerApplicantsCount from './NoOfCounts/DataEnginnerApplicantsCount';
import StudentLogin from './Components/StudentLogin';
import InterviewerLogin from './Components/InterviewerLogin';
import StudentDashboard from './Components/StudentDashboard';
import InterviewerDashboard from './Components/InterviewerDashboard';



function App() {
  return (
    <div className="App">
      
     <BrowserRouter>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/departments" element={<Departments/>} />
      <Route path='/javacount' element={<JavaApplicantsCount/>}/>
      <Route path="/qacount"element={<QaApplicantsCounts/>}/>
      <Route path="/uicount" element={<UiApplicantsCounts/>}/>
      <Route path="/devopscount" element={<DevopsApplicantsCounts/>}/>
      <Route path="/datacount" element={<DataEnginnerApplicantsCount/>}/>
      <Route path='/studentlogin' element={<StudentLogin/>}/>
      <Route path='/studentdashboard' element={<StudentDashboard/>}/>
      <Route path='/interviewerdashboard' element={<InterviewerDashboard/>}/>
      <Route path='/interviewerlogin' element={<InterviewerLogin/>}/> 
      <Route path="/studentregister" element={<StudentRegister/>}/>
      <Route path="/sttudentscount" element={<StudentsCountByDept/>} /> 
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
