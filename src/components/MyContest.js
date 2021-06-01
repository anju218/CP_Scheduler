import { render } from '@testing-library/react'
import axios from 'axios'
import React,{useState,useEffect} from 'react'


export default function MyContest() {
    const [contests, setcontests] = useState([])
    useEffect(function(){
        axios
        .get("https://www.kontests.net/api/v1/all")
        .then((response)=>setcontests(response.data))
        .then(console.log("error"))

    })
    // let contest24 = contests.map(x => {
    //   if ({x.in_24_hrs}==="Yes")
    //       return x; // unchanged
    // })
//     render(); {
//       return (   
//               {this.contests.in_24_hours == 'Yes'? {contests.name}: null }
          
//       )
//   }
// }
    //   contests.map(()=>(
    //     if (condition) {
          
    //     }
    //   ))
    //   if(contests.map(()=>(
    //     contests.in_24_hours=="Yes"
    //   ))){
    //     return(
    //       <div>
    //         <div class="card text-center">
    //           <div class="card-header">
    //             {contests.name}
    //           </div>
    //           <div class="card-body">
    //             <h5 class="card-title">Start:{contests.start_time}</h5>
    //             <a href="{contest.url}" class="btn btn-primary">Go to Contest</a>
    //           </div>
    //         </div>
    //       </div>
    //     )
    //   }
    
      
    // }
  //   contest24=<Contest/>
  //   {contest24.map((contest) =>  (
  //     <div class="card text-center">
  //     <div class="card-header">
  //       {contest.name}
  //     </div>
  //     <div class="card-body">
  //       <h5 class="card-title">Start:{contest.start_time}</h5>
  //       <a href="{contest.url}" class="btn btn-primary">Go to Contest</a>
  //     </div>
  //   </div>

  // ))}
  }   
