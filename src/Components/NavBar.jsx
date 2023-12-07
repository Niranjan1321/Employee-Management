import React from "react"
import '../Styles/NavBar.css'
import { Link } from "react-router-dom"

export const NavBar = () =>{
    return <div className="NavBar">
        <Link to='/'> Home </Link>
        <Link to='/employee'> Employee Data </Link>
    </div>
}