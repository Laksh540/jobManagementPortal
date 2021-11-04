
import { useState } from 'react';
import './App.css';
import AddJob from './components/JobForm/AddJob';
import Main from './components/Main/Main';
function App() {
    //const [displayForm,setShowForm] =useState(false);
   // const showFormchangeHandler=(flag)=>{
     //   setShowForm(flag);
   // }
    
    //  const someJobs =[
    //     {
    //        name:"laksh",
    //        discription:"good",
    //        technology:"css",
    //        id:1         
    //     },
    //     {
    //         name:"kunal",
    //         discription:"fine",
    //         technology:"html",
    //         id:2          
    //      },
    //      {
    //         name:"vaishnav",
    //         discription:"better",
    //         technology:"js",
    //         id:3          
    //      },
    //      {
    //         name:"manish",
    //         discription:"chor",
    //         technology:"copy",
    //         id:4          
    //      },
    //      {
    //         name:"veyon",
    //         discription:"sad",
    //         technology:"coral",         
    //         id:5 
    //      }
    // ];
    
  //console.log(doubled);
  return (
    <div className="main" >
        <div className="heading">
          <h2>Hr Job Management Portal</h2>
        </div>
        <Main ></Main>
        
        
    </div>
  );
}

export default App;
