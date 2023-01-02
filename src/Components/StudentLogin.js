import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../Utils/Api/Api';
import StudentDashboard from './StudentDashboard'

const StudentLogin = () => {
  const navigate=useNavigate();
  const navigateTodashboard=()=>{
    navigate("/studentdashboard")
  }


  const [student,setStudent] = useState({applicantEmail:"",applicantPassword:""})

  const onChangeHandler=(e)=>
  {
    console.log(e.target.value)
    setStudent({...student,[e.target.name]:e.target.value})
    console.log(student.email)
  }

  const onSubmitForm=(e)=>{
    
    e.preventDefault();
    console.log(student.email)
    axios.post(baseUrl+'/applicantlogin',student).then((response)=>{
      console.log(response.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
      <section className="stu-login px-2">

        <div className="container">
          <div className='row d-flex justify-content-center py-5' style={{ border: '1px solid rgba(0,0,0,0.2)', borderRadius: '20px' }}>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 login-left">
              
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-12 login-right">
              <div className="p-5">
                <div className="">
                  <h2 className="text-center"><span style={{ color: "#EE6F1B", marginRight: '0.5rem' }}>Student</span>Login</h2>
                  <form className="mt-4 was-validated" 
                  onSubmit={onSubmitForm}>
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
                        name="applicantEmail"
                        onChange={onChangeHandler}
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
                        name="applicantPassword"
                        onChange={onChangeHandler}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        required
                      />
                      
                      <div class="valid-feedback">Valid.</div>
                      <div class="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="d-grid  col-6 mx-auto mt-5 mb-3">
                      <button type="submit" className="btn text-white " style={{ backgroundColor: '#EE6F1B', borderColor: '#EE6F1B' }} >
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

export default StudentLogin