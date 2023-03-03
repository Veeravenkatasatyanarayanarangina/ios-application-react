import React,{useRef}from 'react'
import { useNavigate ,NavLink} from 'react-router-dom';



const Home = () => {
  const navigate=useNavigate();

  const navigateToStudentRegister=()=>{
    navigate("/studentregister")
  }
  const navigateToStudentLogin=()=>{
    navigate("/studentlogin")
  }
  const navigateToInterviewerlogin=()=>{
    navigate("/interviewerlogin")
  }
  const navButton = useRef(null)
  const linksContainerRef = useRef(null)

 

  
  return (
    <>
    <section className='d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 d-flex flex-column justify-content-center'>
          <>
      <nav className="navbar navbar-expand-md bg-white shadow-sm fixed-top">
        <div className="container">
          <NavLink className="navbar-brand " to="">
            <img
              src="https://motivitylabs.com/wp-content/uploads/elementor/thumbs/logo-prgkor4cuantgaya7ag8ef6zp2tvgjfpld4fltl3e4.png"
              className=""
              alt="Motivity"
            />
          </NavLink>
          <button
            ref={navButton}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            ref={linksContainerRef}
          >
            {  (
              <>
            
              <div className="d-flex align-items-center justify-content-end">
             
              <div className="dropdown mx-4">
                <button className="btn btn-primary-light" type="button" onClick={navigateToStudentRegister}>
                  Registration
                </button>
                
              </div>
              <div className="dropdown mx-4">
                <button className="btn btn-primary-light" type="button" onClick={navigateToStudentLogin}>
                  Login as A Applicant
                </button>
                
              </div>
              <div className="dropdown mx-4">
                <button className="btn btn-primary-light" type="button" onClick={navigateToInterviewerlogin}>
                  Login as A Interviewer
                </button>
                
              </div>
         
            </div>
            </>
            )}
           

          </div>
        </div>
      </nav>
    </>

          </div>
          
        </div>

      </div>

    </section>
    </>
  )
}

export default Home