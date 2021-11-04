import classes from "./ApplicantForm.module.css"

const ApplicantForm=()=>{
    return(
        <div className={classes.form_wrap}>
                <form >
                    <div className="form-group">
                        <label htmlFor="JobCode">Job Code</label>
                        <input type="text" className="form-control" id="JobCode"  placeholder="Job Code"
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name"
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes</label>
                        <input type="text" className="form-control" id="notes" placeholder="Notes"
                           />
                    </div>
                    <div className="form-group">
                        <label htmlFor="technologies">Technologies</label>
                        <input type="text" className="form-control" id="technologies" placeholder="Technologies"
                           />
                    </div>
                    <div className="form-group">
                        <label htmlFor="noticePeriod">Notice Period</label>
                        <input type="text" className="form-control" id="noticePeriod" placeholder="Notice Period"
                           />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salaryAsked">Salary Asked</label>
                        <input type="text" className="form-control" id="salaryAsked" placeholder="Salary Asked"
                           />
                    </div>
                    <button type="submit" className=" btn btn-primary">Submit</button>
                    
                    <button type="submit" className={classes.cancelbtn+" btn btn-danger"}
                        
                    >Cancel</button>
                </form>
            </div>
    )
}
export default ApplicantForm;