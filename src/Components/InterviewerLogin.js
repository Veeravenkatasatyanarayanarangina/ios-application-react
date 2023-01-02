import axios from 'axios';
import {React,useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import { baseUrl } from '../Utils/Api/Api';

const InterviewerLogin = () => {
  const navigate=useNavigate();

  const [admin,setAdmin] = useState([{emailId:"",password:""}])

  const onChnageHandler = (e)=>{
    setAdmin({...admin,[e.target.name]:e.target.value})

  }

  const onLoginHandler=(e)=>{
    e.preventDefault()
    axios.post(baseUrl+'/managerlogin',admin).then((response)=>
    {
      console.log(response.data)
     
       
        navigate("/interviewerdashboard")
    })

  }
  // const navigateTodashboard=()=>{
  //   navigate("/interviewerdashboard")
  // }
  return (
    <>
      <section className="interviwer-login px-2">

        <div className="container">
          <div className='row d-flex justify-content-center py-5' style={{ border: '1px solid rgba(0,0,0,0.2)', borderRadius: '20px' }}>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 login-left">
              
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 login-right">
              <div className="p-5">
                <div className="">
                  <h2 className="text-center"><span style={{ color: "#EE6F1B", marginRight: '0.5rem' }}>Interviewer</span>Login</h2>
                  <form className="mt-4 was-validated" 
                  
                  onSubmit={onLoginHandler}>
                    <div className="mb-3">
                      <label htmlFor="adminEmail" className="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="adminEmail"
                        placeholder="Enter Your Email"
                        aria-describedby="emailHelp"
                        name="emailId"
                        onChange={onChnageHandler}
                        pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                        required
                      />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="mb-3 position-relative">
                      <label htmlFor="adminPassword" className="form-label">
                        Password*
                      </label>
                      <input
                        type= "password"
                        className="form-control"
                        placeholder="Enter Your Password"
                        id="adminPassword"
                        name="password"
                        onChange={onChnageHandler}
                    
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        required
                      />
                     
                      <div class="valid-feedback">Valid.</div>
                      <div class="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="d-grid  col-6 mx-auto mt-5 mb-3">
                      <button type="submit" className="btn text-white " style={{ backgroundColor: '#EE6F1B', borderColor: '#EE6F1B' }}>
                        Login
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default InterviewerLogin