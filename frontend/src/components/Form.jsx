import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../feature/employee/employeeSlice'

function Form() {
    const dispatch = useDispatch()
    const [employeeData, setEmployeeData] = useState({
        name: '',
        email: "",
        role: "",
        salary: '',
        experience: "",
        isRemote: ""
    })
    const { name, email, role, salary, experience, isRemote } = employeeData
    // console.log(employeeData);

    const hendleChange = (e) => {
        setEmployeeData({
            ...employeeData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newEmployeeData = {
            name,
            email,
            role,
            salary: parseInt(salary),
            experience: parseInt(experience),
            isRemote: isRemote.includes("true") ? true : false,
        }
        console.log(isRemote.includes("true") ? true : false)
        dispatch(createEmployee(newEmployeeData))
    }




    return (
        <section className="p-6 bg-gray-100 text-gray-900">
            <div className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

                <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        <p className="text-xs">All Employee please fill your data here</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="Name" className="text-sm">Name</label>
                            <input onChange={hendleChange} name='name' value={name} id="Name" type="text" placeholder="Name" className="w-full p-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="Email" className="text-sm">Email</label>
                            <input onChange={hendleChange} name='email' value={email} id="Email" type="text" placeholder="Email" className="w-full p-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="Role" className="text-sm">Role</label>
                            <input onChange={hendleChange} name='role' value={role} id="Role" type="text" placeholder="Role" className="w-full p-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="Salary " className="text-sm">Salary </label>
                            <input onChange={hendleChange} name='salary' value={salary} id="Salary " type="number" placeholder="Salary " className="w-full p-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="experience " className="text-sm">Experience </label>
                            <input onChange={hendleChange} name='experience' value={experience} id="Salary " type="number" placeholder="months " className="w-full p-1" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="isRemote " className="text-sm">Working from Home </label>
                            <select onChange={hendleChange} name='isRemote' value={isRemote} >
                                <option  >SET</option>
                                <option value="false" defaultValue={'false'} >No</option>
                                <option value="true" >Yas</option>
                            </select>
                        </div>

                        <button className='w-full rounded-md text-white p-1 bg-sky-600' type='submit'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form
