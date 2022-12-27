// import axios from 'axios';
// import {React,useState,useEffect}from 'react'
// import { useNavigate } from 'react-router-dom';
// import InterviewerDashboard from './InterviewerDashboard';

// import './Sidebar.css';


// const StudentsCountByDept = () => {

//     const [listofCount,setListOfCount] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:8088/count").then((responce)=>
//         {
//             setListOfCount(responce.data)
//             console.log(responce.data)
//         }).catch((error)=>{
//             console.log(error)
//         })
//     }, [])
    



//     return (

    

//         <section className='departments'>
//           <div className='container '>
         
//             <div className='row '>
//               <div className='col-md-3'>
//             {<InterviewerDashboard/>}
//             </div>
//               <div className='col-lg-9 '>
             
//                 <div className='card shadow-lg p-3 mb-5 bg-body rounded mt-4 p-5'>
//                 <div className="card-header" style={{ background: "0" }}>
//                     {" "}
//                     <h4>
//                       <span style={{ color: "#EE6F1B" }}>Total</span> Registrations
//                     </h4>{" "}
//                   </div>
                  
//                   <div className='card-body'>
                
//               <div className="row">

//       <div className="col-sm-6 ">
      
//         <div className="card mt-4  shadow mx-4">
//           <div className="card-body"  >
         
//             <h5 className="card-title">Java Applicant's</h5>
//             <p className="card-text">Total Number of Applicants.</p>
            
//           </div>
//         </div>
//       </div>




//       {
//         (listofCount.map((list)=>(
//             <div className="col-sm-6 ">
//         <div className="card mt-4  shadow mx-4">
//           <div className="card-body" >
//             <h5 className="card-title">{list.departmentName}</h5>
//             <p className="card-text">Total Number of Applicants.,{list.noOfCandidates}</p>
//           </div>
//         </div>
//       </div>
        
//         )))
//       }
    
//       <div className="col-sm-6 ">
//         <div className="card mt-4  shadow mx-4">
//           <div className="card-body">
//             <h5 className="card-title">UI/UX Applicant's</h5>
//             <p className="card-text">Total Number of Applicants.</p>
            
//           </div>
//         </div>
//       </div>
    
//       <div className="col-sm-6 ">
//         <div className="card mt-4  shadow mx-4">
//           <div className="card-body">
//             <h5 className="card-title">DEVOPS Applicant's</h5>
//             <p className="card-text">Total Number of Applicants.</p>
            
//           </div>
//         </div>
//       </div>
    
//       <div className="col-sm-6 ">
//         <div className="card mt-4  shadow mx-4">
//           <div className="card-body">
//             <h5 className="card-title">QA Applicant's</h5>
//             <p className="card-text">Total Number of Applicants.</p>
            
//           </div>
//         </div>
//       </div>
    
//       <div className="col-sm-6 ">
//         <div className="card mt-4  shadow mx-4">
//           <div className="card-body">
//             <h5 className="card-title"> DATA ENGINEER Applicant's</h5>
//             <p className="card-text">Total Number of Applicants.</p>
            
//           </div>
//         </div>
//       </div>
    
//       <div className="col-sm-6 ">
//         <div className="card mt-4  shadow mx-4">
//           <div className="card-body">
//             <h5 className="card-title">OTHERS Applicant's</h5>
//             <p className="card-text">Total Number of Applicants.</p>
            
//           </div>
//         </div>
//       </div>
    
//               </div>
    
//             </div>
//           </div>
//           </div>
//           <div className='table'>
//           <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>

//           </div>
//           </div>
//     </div>
//         </section>
    
      
//       )
// }

// export default StudentsCountByDept