/*import React from "react";
import {NavLink} from "react-router-dom";

const Menu=()=>{
    return(
        <>
        <NavLink  activeClassName="active_class" to="/">About</NavLink>
        <NavLink  activeClassName="active_class" to="/service">Services</NavLink>
    
        <NavLink activeClassName="active_class" to="/contact">contact us</NavLink>
        </>
    );
}
export default Menu;
*/
import React from 'react'
import {NavLink} from "react-router-dom"
const Menu = ()=>{
    return(<>
    <NavLink  exact activeClassName="active_class"to="/">About us </NavLink>
    <NavLink  exact activeClassName="active_class"to="/Contact">Contact us </NavLink>
    <NavLink  exact activeClassName="active_class"to="/Service">Service </NavLink>
    </>)
}

export default Menu;