import React from 'react'
import { useNavigate } from 'react-router-dom'

const Departments = () => {
  const navigate=useNavigate();

  const navigateToJavaCount=()=>{
    navigate("/javacount")
  }
  const navigateToQACount=()=>{
    navigate("/qacount")
  }
  const navigateToUiCount=()=>{
    navigate("/uicount")
  }
  const navigateToDevopsCount=()=>{
    navigate("/devopscount")
  }
  const navigateToDataEngineerCount=()=>{
    navigate("/datacount")
  }
  const navigateToOthers=()=>{
    navigate("/othercount")
  }

  return (

    <section className='departments'>
      <div className='container '>
        <div className='row g-3'>
          <div className='col-lg-12'>
            <div className='card shadow-lg p-3 mb-5 bg-body rounded mt-4 p-5'>
            <div className="card-header" style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}>Total</span> Registrations
                </h4>{" "}
              </div>
              
              <div className='card-body' >
          <div className="row">
  <div className="col-sm-6 ">
    <div className="card mt-4  shadow mx-4">
      <button className='btn btn-light'>
      <div className="card-body" 
   onClick={navigateToJavaCount}  >
        <h5 className="card-title" >Java Applicant's</h5> 
        <p className="card-text">Total Number of Applicants.</p>
      </div>
      </button>
    </div>
  </div>

  <div className="col-sm-6 ">

    <div className="card mt-4  shadow mx-4">
      <button className="btn btn-light">
      <div className="card-body" onClick={navigateToUiCount}>
        
        <h5 className="card-title">UI/UX Applicant's</h5>
        <p className="card-text">Total Number of Applicants.</p>
        
      
      </div>
      </button>
    </div>
  </div>

  <div className="col-sm-6 ">
    <div className="card mt-4  shadow mx-4">
    <button className='btn btn-light'>
      <div className="card-body" onClick={navigateToDevopsCount}>
        <h5 className="card-title">DEVOPS Applicant's</h5>
        <p className="card-text">Total Number of Applicants.</p>
        
      </div>
      </button>
    </div>
  </div>

  <div className="col-sm-6 ">
    <div className="card mt-4  shadow mx-4">
    <button className='btn btn-light'>
      <div className="card-body" onClick={navigateToQACount}>
        <h5 className="card-title">QA Applicant's</h5>
        <p className="card-text">Total Number of Applicants.</p>
        
      </div>
      </button>
    </div>
  </div>

  <div className="col-sm-6 ">
    <div className="card mt-4  shadow mx-4">
    <button className='btn btn-light'>
      <div className="card-body" onClick={navigateToDataEngineerCount}>
        <h5 className="card-title"> DATA ENGINEER Applicant's</h5>
        <p className="card-text">Total Number of Applicants.</p>
        
      </div>
      </button>
    </div>
  </div>

  <div className="col-sm-6 ">
    <div className="card mt-4  shadow mx-4">
    <button className='btn btn-light'>
      <div className="card-body" onClick={navigateToOthers}>
        <h5 className="card-title">OTHERS Applicant's</h5>
        <p className="card-text">Total Number of Applicants.</p>
        
      </div>
      </button>
    </div>
  </div>

          </div>

        </div>
      </div>
      </div>
      </div>
</div>
    </section>

  
  )
}

export default Departments