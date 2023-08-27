import React, { useEffect } from 'react'
import Profile from './Profile'
import { useDispatch, useSelector } from 'react-redux'
import {  getEmployees } from '../feature/employee/employeeSlice'

function ProfileList() {
  const { employee } = useSelector(state => state.employee)
  const dispatch = useDispatch()

  
  if (!employee || employee.length === 0) {
    return (
      <h1>No Data Here...</h1>
      )
    }
    useEffect(() => {
      dispatch(getEmployees())
    },[])
    
    return (
    <div>
      {
        employee.map(employee => <Profile key={employee._id} employee={employee} />)
      }

    </div>
  )
}

export default ProfileList
