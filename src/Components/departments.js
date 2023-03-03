import {React,useEffect,useState } from "react";
import { useNavigate} from "react-router-dom";
import { baseUrl } from "../Utils/Api/Api";
import InterviewerDashboard from "./InterviewerDashboard";
import axios from "axios";

import "./Sidebar.css";

const Departments = () => {
  const navigate = useNavigate();
  const [applicantDetails,setApplicantDetails]=useState([]);

  const navigateToJavaCount = () => {
    navigate("/javacount");
  };
  const navigateToQACount = () => {
    navigate("/qacount");
  };
  const navigateToUiCount = () => {
    navigate("/uicount");
  };
  const navigateToDevopsCount = () => {
    navigate("/devopscount");
  };
  const navigateToDataEngineerCount = () => {
    navigate("/datacount");
  };
  const navigateToOthers = () => {
    navigate("/othercount");
  };

  const [listofCount,setListOfCount] = useState([]);
  useEffect(() => {
            axios.get(baseUrl+'/count').then((responce)=>
            {
                setListOfCount(responce.data)
                console.log(responce.data)
            }).catch((error)=>{
                console.log(error)
            })
        }, []);

      const handleDetails = (department)=>{
        axios.get(baseUrl+'/getdetailsbydept',{params:{department:department}}).then((response)=>
        {
          console.log(response.data);
          setApplicantDetails(response.data)
        })

      }

        
  return (
    <section className="departments">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3">
          <InterviewerDashboard />
          </div>
          <div className="col-md-9">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded mt-4 p-5">
              <div className="card-header" style={{ background: "0" }}>
                {" "}
                <h4>
                  <span style={{ color: "#EE6F1B" }}>Total</span> Registrations
                </h4>{" "}
              </div>

              <div className="card-body">
                <div className="row">

                {
        (listofCount.map((list)=>(
          <div className="col-sm-4 ">
          <div className="card mt-4  shadow mx-4"
        >
            <button className="btn shadow"  style={{ backgroundColor: '#EE6F1B', borderColor: '#EE6F1B', color:'#fff' }}
               onClick={
                ()=>{
                  handleDetails(list.departmentName)
                }
               }>
                 Get Details</button>
              <div
                className="card-body"
               
                
              >
                <h5 className="card-title">{list.departmentName}</h5>
                <p className="card-text">
                  Total Number of Applicants : {list.noOfCandidates}
                </p>
              </div>
           
          </div>
        </div>
        )))
      }


{/* <h5 className="card-title">{list.departmentName}</h5>
            <p className="card-text">Total Number of Applicants.,{list.noOfCandidates}</p> */}

                </div>
                <hr/>
                <div className="row mt-5">
                  <div className="col-md-12">
                    <>
                    {
            applicantDetails.length>0 &&
               <div className="table-responsive-sm">
               <table className="table">
                 <thead>
                   <tr>
                     <th scope="col">Applicant Id</th>
                     <th scope="col">ApplicantName</th>
                     <th scope="col">Education</th>
                     <th scope="col">AppliedDepartMent</th>
                     <th scope="col">ApplicantCollege</th>
                     <th scope="col">Action</th>
                   </tr>
                 </thead>
                 <tbody>
                  {
                    (applicantDetails.map((applicant)=>
                    (
                      <tr>
                      <th >{applicant.applicantId}</th>
                      <td>{applicant.applicantFirstName}</td>
                      <td>{applicant.applicantQualification}</td>
                      <td>{applicant.applicantDepartment}</td>
                      <td>{applicant.applicantCollegeName}</td>
                      <td><button type="button" className="btn btn-success m-2">Accept</button>
                      <button className="btn btn-danger">Reject</button>
                      </td>
                      

                    </tr>

                    )))
                  }
                  
                 </tbody>
               </table>
             </div>
              
            }
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            

        </div>
    </section>
  );
};

export default Departments;
