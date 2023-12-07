import React from "react"
import '../Styles/DataTable.css'

export const DataTable = ({allEmployeesData , handleDeleteEmployee, handleMaritalStatus}) =>{
    console.log(allEmployeesData)
    return <div>
        {
            allEmployeesData?.length===0?
            <div>Loading</div>:
            <table className="DataTable">
            <thead>
                <tr>
                    <th>
                        Sl.No
                    </th>
                    <th>
                        Employee ID
                    </th>
                    <th>
                    Name
                    </th>
                    <th>
                    Age 
                    </th>
                    <th>
                    Department  
                    </th>
                    <th>
                     MaritalStatus   
                    </th>
                    <th>
                       action
                    </th>
                </tr>
            </thead>
            <tbody>
                {allEmployeesData?.map((employee, i)=> {
                    return <tr key={i}>
                        <td>
                        {i+1}
                        </td>
                        <td>
                        {employee.id}
                        </td>
                    <td>
                    {employee.name}
                    </td>
                    <td>
                    {employee.age}
                    </td>
                    <td>
                    {employee.department}
                    </td>
                    <td>
                    <div className="maritalStatus" onClick={()=>{handleMaritalStatus(employee)}}>
                    {employee.maritalStatus?"Married":"Unmarried"}
                    </div>
                    </td>
                    <td >
                        <div className="employeeDeleteButton" onClick={()=>handleDeleteEmployee(employee.id)}>
                            {"delete"}
                        </div>
                    </td>
                </tr>
                }
                    
                )}
            </tbody>
        </table>
        }
    </div>
}