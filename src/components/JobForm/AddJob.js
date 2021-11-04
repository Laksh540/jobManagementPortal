import react, { useState } from "react";
import classes from "./AddJob.module.css";

const AddJob=(props)=>{
    const [jobName,setJobName]=useState("");
    const [jobDescription,setJobDescription]=useState("");
    const [technologies,settechnologies]=useState("");
    const cancelButtonClickHandler=()=>{
        props.hideForm();
    }
    const nameChangeHandler=(event)=>{
        setJobName(event.target.value);
       // console.log(jobName);
    }
    const DescriptionChangeHandler=(event)=>{
        setJobDescription(event.target.value);
        console.log(jobDescription);
    }
    const technologiesChangeHandler=(event)=>{
        settechnologies(event.target.value);
        console.log(technologies);
    }
    const submitHandler=(event)=>{
        //alert("hello")
        event.preventDefault();
        const newJobPost={
            name:jobName,
            description:jobDescription,
            technology:technologies,
            id:"JB"+Math.floor(Math.random()*1000000)
        }
        //console.log(newJobPost);
        setJobName("");
        setJobDescription("");
        settechnologies("");
        props.addnewJob(newJobPost);
    }

    return(
        <react.Fragment>
            <div className={classes.form_wrap}>
                <form  onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"  placeholder="Enter Name"
                            onChange={nameChangeHandler}
                            value={jobName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" placeholder="description"
                            onChange={DescriptionChangeHandler}
                            value={jobDescription}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="technologies">Technologies</label>
                        <input type="text" className="form-control" id="technologies" placeholder="technologies"
                            onChange={technologiesChangeHandler}
                            value={technologies}/>
                    </div>
                    
                    <button type="submit" className=" btn btn-primary">Submit</button>
                    
                    <button type="submit" className={classes.cancelbtn+" btn btn-danger"}
                        onClick={cancelButtonClickHandler}
                    >Cancel</button>
                </form>
            </div>
        </react.Fragment>
    )
}
export default AddJob;