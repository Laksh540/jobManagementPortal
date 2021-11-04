import { useEffect, useState } from "react";
import ApplicantForm from "../ApplicantForm/ApplicantForm";
import AddJob from "../JobForm/AddJob";
import JobsCreated from "../JobsCreated/JobsCreated";

import classes from "./Main.module.css";

const Main=(props)=>{
    const[showAddJobForm,setFormToggle] = useState(false);
    const[showApplicantForm,setShowApplicantForm]=useState(false);
    //const[isEmpty,setIsEmpty] =useState(true);
    const[newJob,setNewJob]=useState("");
    //console.log(props.lsItem);
    
    // console.log(props.lsItem);
    
    
    const showFormHandler =()=>{
        
            setFormToggle(true);
       
       // props.toggleForm(showAddJobForm);
    }
    const hideAddJobFormHandler =()=>{
            setFormToggle(false);
    }
    const NewJobHandler=(item)=>{
        setNewJob((previousItem)=>{return [item,...previousItem]});
        console.log(newJob);
        window.localStorage.setItem("currentJobs",JSON.stringify(newJob));
         
    }
    const showApplicantFormHandler=()=>{
            setShowApplicantForm(true);
    }
    const showJobListHandler=()=>{
        setShowApplicantForm(false);
}
    useEffect(() =>{
         if(JSON.parse(localStorage.getItem('currentJobs')) != null){
            setNewJob(JSON.parse(localStorage.getItem('currentJobs')));
         }
       
        
    }, []);
    return (
        <div className={classes.main_container}>
            <div className={classes.nav}>
                <div className="col-lg-6">
                    <h3>Jobs</h3>
                    <p><span>Dashboard</span>/Jobs</p>
                </div>
                <div className={classes.navtags+" col-lg-6"}>
                    <input type="button" value="Add Job"
                            onClick={showFormHandler}
                            />
                    <input type="button" value="Fill an Applicant"
                            onClick={showApplicantFormHandler}
                            /> 
                    <input type="button" value="Current Openings"
                            onClick={showJobListHandler}
                            />                
                </div>
                
            </div>
            <div>
                {showAddJobForm && <AddJob hideForm={hideAddJobFormHandler}
                    addnewJob={NewJobHandler}></AddJob>}
            </div>
            <div>
                {!showApplicantForm && <JobsCreated lsItem={newJob}></JobsCreated>}
                {showApplicantForm && <ApplicantForm></ApplicantForm>}
               {/* {props.lsItem.map((job) =>
                  <div>
                    <p>{job.id}</p>
                    <p>{job.name}</p>
                    <p>{job.discription}</p>
                    <p>{job.technology}</p>
                  </div>
                 )} */}
                {/* <TestOne lsItem={props.lsItem}></TestOne> */}
            </div>
        </div>
    );
}
export default Main;