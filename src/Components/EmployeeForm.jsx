import React from "react"
import '../Styles/EmployeeForm.css'
import { DataTable } from "./DataTable"

export const EmployeeForm = ({ eData , setEData, sendData }) => {

    const { name, age, department, maritalStatus } = eData

    const handleOnChange = (e) =>{

        if(e.target.name==='maritalStatus'){
            setEData({...eData, [e.target.name]:e.target.checked})
        }
        else{
            setEData({...eData, [e.target.name]:e.target.value})
        }
    }

    return <div>
        <form className="EmployeeForm">
            <h1>Enter employee details</h1>
            <input type="text" placeholder="Enter Name" value={name} name = "name" onChange={(e) => handleOnChange(e)} />
            <input type="number" placeholder="Enter Age" value={age} name = "age" onChange={(e) => handleOnChange(e)} />
            <input type="text" placeholder="Enter Department" value={department} name = "department" onChange={(e) => handleOnChange(e)} />
            <label >marital Status <input type="checkbox" value={maritalStatus} name = "maritalStatus" onChange={(e) => handleOnChange(e)} /> </label>
            <input type="submit" value={"Submit details"} onClick={sendData} />
        </form>
    </div>
}