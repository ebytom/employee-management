import React, { useEffect, useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'

const AddEmployee = ({ setaddEmployee }) => {


    const [employee, setemployee] = useState({
        name: "",
        dob: "",
        dept: "",
        doj: ""
    })


    const submit = () => {
        // Create a new object with the newItem and a unique ID
        const newItem = {
            id: Date.now(),
            data: employee
        };

        // Retrieve existing data from local storage
        const oldData = JSON.parse(localStorage.getItem('employees')) || [];

        // Add the new object to the existing data array
        const newData = [...oldData, newItem];

        // Store the updated data back in local storage
        localStorage.setItem('employees', JSON.stringify(newData));

        setaddEmployee(false)
    }


    return (
        <div className='addPopup'>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h2>Add Employee</h2>
                <div onClick={() => setaddEmployee(false)}><CloseOutlined className='close' /></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input type="text" className='inputFeild' placeholder='Employee Name' onChange={(e) => setemployee({
                    ...employee,
                    name: e.target.value
                })} />
                <input type="date" className='inputFeild' placeholder='Date of Birth' onChange={(e) => setemployee({
                    ...employee,
                    dob: e.target.value
                })} />
                <input type="text" className='inputFeild' placeholder='Department' onChange={(e) => setemployee({
                    ...employee,
                    dept: e.target.value
                })} />
                <input type="date" className='inputFeild' placeholder='Date of Joining' onChange={(e) => setemployee({
                    ...employee,
                    doj: e.target.value
                })} />
            </div>
            <div className='submitBtn' onClick={submit}>Submit</div>
        </div>
    )
}

export default AddEmployee