import { useState } from "react";
import classes from "./ListJobs.module.css";

const ListJobs =(props)=>{
    
    return(
    <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>{props.technology}</td>
        
    </tr>
    
    )   
    
}
export default ListJobs;