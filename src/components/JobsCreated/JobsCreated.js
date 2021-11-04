import classes from "./JobsCreated.module.css"
import ListJobs from "./ListJobs";

const JobsCreated=(props)=>{
    console.log(props.lsItem);
    if(props.lsItem ==null){
        props.lsItem =[]; 
    }
    return(
        <div>
            <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Job Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Technologies</th>
                        </tr>
                    </thead>
                    <tbody>
                           
                            { props.lsItem.length >0 && 
                                     props.lsItem.map((job) => (
                                    <ListJobs
                                        key={job.id}
                                        id={job.id}
                                        name={job.name}
                                        description={job.description}
                                        technology={job.technology}
                                    ></ListJobs>
                                    )
                                    )}
                             { props.lsItem.length === 0 &&
                                   <tr>
                                        <th scope="row">---</th>
                                        <td>---</td>
                                        <td>---</td>
                                        <td>---</td>
                                        
                                   </tr>   }        
                        {/* <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        </tr> */}
                    </tbody>
           </table>
        </div>
    )
}
export default JobsCreated;