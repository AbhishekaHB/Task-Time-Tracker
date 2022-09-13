
import { useEffect, useState } from "react";

const Home = () => {

  let [task,setTask]=useState("")
  let [data,setData]=useState()
  
  

     useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("task")===null)
            {
                localStorage.setItem("task","[]")
            }else
            {
                let y=localStorage.getItem("task")
                    y=JSON.parse(y);
                 setData(y)
            }
        },1500) })  

     let addHandler=(task)=>{
        let x=localStorage.getItem("task");
        x=JSON.parse(x);
        x.push({id:(x.length+1),name:task, Sdate:new Date().toLocaleString(),Edate:"IN-PROGRESS",status:"IN-COMPLETE"})
        x=JSON.stringify(x)
        localStorage.setItem("task",x)
     }

     let ongoingHandler=(id)=>{
        let x=localStorage.getItem("task");
        x = JSON.parse(x);
        x[id-1].status = "COMPLETE";
        x[id-1].Edate = new Date().toLocaleString();
        x=JSON.stringify(x)
        localStorage.setItem("task",x)
     }
      
    return ( 
        <div className="home">
             <div className="card">
                <div className="card-header">
                    ADD TASK
                </div>
                <div className="card-body">
                    <h5 className="card-title">ADD TASK NAME HERE</h5>
                    <input type="text" className="input" onChange={(e)=>{setTask(e.target.value)}}/> <br />
                    <button className="btn btn-primary" onClick={()=>{addHandler(task)}}> ADD TASK</button>
                </div>  
             </div>
             <h6 className="note"> * Click In-Complete Button After Completion of Your Task </h6>
             <div className="disp">
                        <table class="table table-success table-striped" cl>
                                  <thead>
                                    <tr>
                                      <th scope="col">SL NO</th>
                                      <th scope="col">TASK NAME</th>
                                      <th scope="col">START DATE</th>
                                      <th scope="col">END DATE</th>
                                      <th scope="col">STATUS</th>
                                    </tr>
                                  </thead>            
             { data && data.map((task)=>{return(
                                  <tbody>
                                    <tr>
                                      <th scope="row">{task.id}</th>
                                      <td>{task.name}</td>
                                      <td>{task.Sdate}</td>
                                      <td>{task.Edate}</td>
                                      <td><button onClick={()=>{ongoingHandler(task.id)}} className="btn1">{task.status}</button></td>
                                    </tr>
                                  </tbody>
                )})}
                           </table>                    
              </div>  
        </div >   
     );
}
 
export default Home;