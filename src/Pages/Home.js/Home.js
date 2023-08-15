import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import EmployeeCard from '../../Components/EmployeeCard'
import AddEmployee from '../../Components/AddEmployee'
import EmployeeDetails from '../../Components/EmployeeDetails'

const Home = () => {

    const [addEmployee, setaddEmployee] = useState(false)
    const [employeeDetails, setemployeeDetails] = useState("")

    const [employeeData, setemployeeData] = useState([])

    useEffect(() => {
        if (localStorage.getItem('employees') == null) {
            setemployeeData([]);
        }
        else {
            setemployeeData(JSON.parse(localStorage.getItem('employees')))
        }
    }, [addEmployee])

    return (
        <div className='home'>
            <Header setaddEmployee={setaddEmployee} />
            <div className='employeeGrid'>
                {
                    employeeData.map(emp => {
                        return (
                            <EmployeeCard employee={emp} setemployeeDetails={setemployeeDetails} />
                        )
                    })
                }
                {
                    addEmployee &&
                    <AddEmployee setaddEmployee={setaddEmployee} />
                }
                {
                    employeeDetails &&
                    <EmployeeDetails setemployeeDetails={setemployeeDetails} employeeDetails={employeeDetails} />
                }
            </div>
        </div>
    )
}

export default Home