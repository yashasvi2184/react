import React from 'react'
import {NavLink} from "react-router-dom";
const Error=()=>{
    return(<>
        <h1>404 error page</h1>
        <NavLink to="/">go back</NavLink>
    </>)
}
export default Error;