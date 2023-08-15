import React from 'react'

const EmployeeCard = ({ employee, setemployeeDetails }) => {
    return (
        <div onClick={() => setemployeeDetails(employee)} className='employeeCard'>
            <div>
                <img src="emp.png" height="60px" />
            </div>
            <div style={{ paddingLeft: "20px", height: "100%", textAlign: "left", alignItems: "center" }}>
                <h2 style={{ margin: 0 }}>{employee.data.name}</h2>
                <b>#{employee.id}</b>
            </div>
        </div>
    )
}

export default EmployeeCard