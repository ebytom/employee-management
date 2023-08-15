import React from 'react'
import { CloseOutlined } from '@ant-design/icons'

const EmployeeDetails = ({ employeeDetails, setemployeeDetails }) => {
    return (
        <div className='addPopup'>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <b>#{employeeDetails.id}</b>
                <div onClick={() => setemployeeDetails(false)}><CloseOutlined className='close' /></div>
            </div>
            <div>
                <img src='emp.png' height="80px" style={{ marginTop: "20px", marginBottom: "10px" }} />
                <div className='rowData'>
                    <b>Name</b>
                    <b>{employeeDetails.data.name}</b>
                </div>
                <div className='rowData'>
                    <b>Department</b>
                    <b>{employeeDetails.data.dept}</b>
                </div>
                <div className='rowData'>
                    <b>DOB</b>
                    <b>{employeeDetails.data.dob}</b>
                </div>
                <div className='rowData'>
                    <b>DOJ</b>
                    <b>{employeeDetails.data.doj}</b>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails