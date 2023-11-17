/*import React from "react";
import { useLocation, useParams,useHistory } from "react-router-dom";
const User=()=>{
    const { fname , lname }=useParams();
    const location = useLocation();
    const history = useHistory(); 
return( <>
<h1> user { fname } { lname } page</h1>
<p>my cuurrent location is {location.pathname} </p>
{location.pathname===`/user/yashasvi/zankat`?(
<button onClick={()=> history.goBack()}>back
</button>):null}
</>
)
};
export default User;*/
import React from 'react'
import {useParams,useLocation,useNavigate} from 'react-router-dom'
const User=()=>{
    const{fname,lname} = useParams();
    const location = useLocation();
    const history = useNavigate();
    console.log(location);
    return(<>
        <h1>my {fname} {lname} </h1>
        <br/>
        <h2>my current location is {location.pathname}</h2>
        <button onClick={()=>{
        history.goBack()
        }}> 
        goBack
        </button>
    </>)
}
export default User;