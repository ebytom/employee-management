import React from 'react'

const Header = ({ setaddEmployee }) => {

    const handleAddEmployee = () => {
        setaddEmployee(true)
    }

    return (
        <div className='header'>
            <h2>Employee Management</h2>
            <div onClick={handleAddEmployee} className='btn'>
                Add Employee
            </div>
        </div>
    )
}

export default Header