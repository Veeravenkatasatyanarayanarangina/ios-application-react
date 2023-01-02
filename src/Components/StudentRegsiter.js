import axios from 'axios';
// import e from 'cors';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {baseUrl}  from '../Utils/Api/Api'
const StudentRegister = () => {

  //const [resume, setResume] = useState([]);
  const navigate=useNavigate();
  const navigateTohomepage=()=>{
    navigate("/")
  }

  const [applicantModel, setApplicantModel] = useState([
    {
      applicantId: "",
      applicantFirstName: "",
      applicantLastName: "",
      applicantCollegeName: "",
      applicantEmail: "",
      applicantPassword: "",
      applicantQualification: "",
      applicantPOY: "",
      applicantDepartment: "",
      applicantExp: "",
      applicantGender: "",
      applicantMobileNumber: "",
      applicantAddress: "",
    }
  ]);

  const onChangeHandler = (e) => {
    setApplicantModel({ ...applicantModel, [e.target.name]: e.target.value });
    console.log(e.target.value)
   // console.log({...applicantModel})

   //e.target.name ==="applicantResume"?setApplicantModel({ ...applicantModel, [e.target.name]: e.target.files[0]}):
   //setApplicantModel({ ...applicantModel, [e.target.name]: e.target.value });

  }
  
const onSubmitform=(e)=>
{

  e.preventDefault();
  console.log(applicantModel.applicantDepartment);
  axios.post(baseUrl+'/save',applicantModel).then((response)=>{
    console.log(response.data)
    const res = response.data;

      alert("successfully registered and email sent to ",response.data.applicantEmail)
      navigate('/')
    
  }
  ).catch=(error)=>
  {
    console.log(error.message);
  }

}
  
  return (
    <section className="student_register">
      <div className="container">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-lg-8">
            <div className="card  shadow">
              <div className="card-header" style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}>Student</span> Registration
                </h4>{" "}
              </div>
              <div className="card-body p-5">
                <form className="row g-3 was-validated"
                encType='multipart/form-data'
                  onSubmit={onSubmitform}

                >
                  <div className="col-md-6">
                    <label htmlFor="fname" className="form-label">
                      First Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="applicantFirstName"
                      onChange={onChangeHandler}

                      pattern="[a-zA-Z\s]{4,15}"
                      id="fname"
                      placeholder="Enter Your First Name"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lname" className="form-label">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="applicantLastName"
                      onChange={onChangeHandler}

                      id="lname"
                      pattern="[A-Za-z]{1,10}"
                      placeholder="Enter Your Last Name"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="collagename" className="form-label">
                      Collage Name/ Training Instistute*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="applicantCollegeName"
                      onChange={onChangeHandler}

                      id="collagename"
                      pattern="[A-Za-z]{1,10}"
                      placeholder="Enter Your Collage/ Training Institute Name"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="applicantEmail"
                      onChange={onChangeHandler}

                      className="form-control"
                      placeholder="Enter Your Email "
                      id="email"
                      pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                      required
                    />
                  </div>
                  <div className="col-md-6 position-relative">
                    <label htmlFor="password" className="form-label">
                      Password*
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="applicantPassword"
                      onChange={onChangeHandler}

                      placeholder="Enter Your Password"
                      id="password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      required
                    />

                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="Qualification"
                      placeholder="Enter Your Qualification"
                    >
                      Qualification
                    </label>
                    <select
                      className="form-select"
                      name="applicantQualification"
                      onChange={onChangeHandler}

                      id="qualification"
                      required
                    >
                      <option value="">Select Qualification</option>
                      <option value="BE/BTECH">BE/BTECH</option>
                      <option value="ME/MTECH">ME/MTECH</option>
                      <option value="MCA/MASTERS">MCA/MASTERS</option>
                      <option value="BSC/BCA">BSC/BCA</option>
                      <option value="others">others</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="passedyear"
                      placeholder="Enter Passed Out Year"
                    >
                      Passed Out In The Year
                    </label>
                    <select
                      className="form-select"
                      name="applicantPOY"
                      onChange={onChangeHandler}

                      id="passedyear"
                      required
                    >
                      <option value="">Select Year of PassOut</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="pursuing">pursuing</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="appliedfor"
                      placeholder="Enter Your Gender"
                    >
                      Application for Department
                    </label>
                    <select
                      className="form-select"
                      name="applicantDepartment"
                      onChange={onChangeHandler}

                      id="appliedfor"
                      required
                    >
                      <option value="">Select Department </option>
                      <option value="JAVA">JAVA</option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="DEVOPS">DEVOPS</option>
                      <option value="DATA ENGINEERS">DATA ENGINEER</option>
                      <option value="QA">QA</option>
                      <option value="others">others</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="exp" className="form-label">
                      Experience*
                    </label>
                    <input
                      type="number"
                      name="applicantExp"
                      onChange={onChangeHandler}

                      className="form-control"
                      placeholder="Enter Your Experience"
                      id="exp"
                      min={0}
                      minLength={1}
                      maxLength={2}
                      max={80}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label"
                      htmlFor="gender"
                      placeholder="Enter Your Gender"
                    >
                      Gender*
                    </label>
                    <select
                      className="form-select"
                      id="doctorGender"
                      name="applicantGender"
                      onChange={onChangeHandler}
                      required

                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="mobileno" className="form-label">
                      Mobile No*
                    </label>
                    <input
                      type="text"
                      name="applicantMobileNumber"
                      onChange={onChangeHandler}

                      className="form-control"
                      placeholder="Enter Your Mobile Number"
                      id="mobile"
                      pattern="[1-9]{1}[0-9]{9}"
                      required
                    />
                  </div>
                  {/* <div className="col-md-6">
                    <label htmlFor="resume" className="form-label">
                      Upload Updated Resume*
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="resume"
                      onChange={onChangeResume}
                      id="resume"
                      pattern="[A-Za-z]{1,10}"
                      placeholder="size should be <=5mb"
                      aria-describedby="emailHelp"
                      required
                      multiple
                    />
                  </div> */}
                  <div className="col-md-12">
                    <label htmlFor="address" className="form-label">
                      {" "}
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      name="applicantAddress"
                      onChange={onChangeHandler}

                      placeholder="Enter Your Address"
                      id="address"
                    ></textarea>
                  </div>

                  <div className="col-6 d-grid mx-auto mt-5 mb-3">
                    <button 
                      type="submit"
                      className="btn text-white"
                      style={{
                        backgroundColor: "#EE6F1B",
                        borderColor: "#EE6F1B",
                      }}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default StudentRegister


