import axios from 'axios'

const API_URL = 'api/user'

const getEmployees = async ()=>{
    const response = await axios.get(API_URL)
    return response.data
}

const createEmployee = async (employeeData)=>{
    const response = await axios.post(API_URL + '/create' , employeeData )
    return response.data
}

const employeeServices ={
    getEmployees,
    createEmployee
}

export default employeeServices