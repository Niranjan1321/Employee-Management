import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import { NavBar } from './Components/NavBar'
import { EmployeeForm } from './Components/EmployeeForm';
import { DataTable } from './Components/DataTable';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const [eData, setEData] = useState({
    "name":"",
    "age":"",
    "department":"",
    "maritalStatus":""
  })

  const [allEmployeesData, setAllEmployeesData] = useState([])

  const sendData = (event) => {

    event.preventDefault()

    console.log(eData)

        fetch('http://localhost:3000/EMPLOYEES',{
            method:"POST",
            body:JSON.stringify(eData),
            headers:{
              "Content-Type":"application/json"
            }
        })
            .then(res => res.json)
            .then(res =>getData())
            .catch(error=>{
              console.log('error is ', error)
            })
    }

    const getData = () => {
       
        fetch('http://localhost:3000/EMPLOYEES')
            .then(res => res.json())
            .then(res => setAllEmployeesData(res))
    }

    const handleDeleteEmployee = (id) => {

      fetch(`http://localhost:3000/EMPLOYEES/${id}`,{
            method:"DELETE",
        })
            .then(res => res.json)
            .then(res =>getData())
            .catch(error=>{
              console.log('error is ', error)
            })

    }

    const handleMaritalStatus = (employee) => {

      const maritalStatus = employee.maritalStatus ? '' : true
      fetch(`http://localhost:3000/EMPLOYEES/${employee.id}`,{
            method:"PATCH",
            body:JSON.stringify({"maritalStatus":maritalStatus}),
            headers:{
              "Content-Type":"application/json"
            }
        })
            .then(res => res.json)
            .then(res =>getData())
            .catch(error=>{
              console.log('error is ', error)
            })

    }

    useEffect(()=>{
      getData()
    },[])

  return (
   <div>
   <NavBar/>
   <Routes>
   <Route path="/" element={<EmployeeForm {...{eData, setEData, sendData}} />}/>
   <Route path = "/employee" element={<DataTable {...{allEmployeesData, handleDeleteEmployee, handleMaritalStatus}}/>}/>
   </Routes>
   </div>
  );
}

export default App;
