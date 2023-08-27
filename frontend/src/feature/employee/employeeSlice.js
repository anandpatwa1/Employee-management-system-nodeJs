import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import employeeServices from "./employeeService";

const initialState = {
    employee : [{} ],
    isLoding : false,
    isSuccess : false,
    isError : false,
    message : ""
}

const employeeSlice = createSlice({
    name : "employee",
    initialState,
    reducers: {

    },
    extraReducers : (builder)=>{
        builder
        .addCase(getEmployees.pending , (state , action)=>{
            state.isLoding = true
        })
        .addCase(getEmployees.fulfilled , (state , action)=>{
            state.isLoding = false
            state.isSuccess = true
            state.employee = action.payload
        })
        .addCase(getEmployees.rejected , (state , action)=>{
            state.isLoding = false
            state.isSuccess = false
            state.isError = true
        })
        .addCase(createEmployee.pending , (state , action)=>{
            state.isLoding = true
        })
        .addCase(createEmployee.fulfilled , (state , action)=>{
            state.isLoding = false
            state.isSuccess = true
            state.employee.push(action.payload)
        })
        .addCase(createEmployee.rejected , (state , action)=>{
            state.isLoding = false
            state.isSuccess = false
            state.isError = true
        })
    }
})

export const getEmployees = createAsyncThunk('fatch/employees' , async()=>{
try {
    return await employeeServices.getEmployees()
} catch (error) {
    console.log(error);
}
})

export const createEmployee = createAsyncThunk('create/employee' , async(employeeData)=>{
    try {
        return await employeeServices.createEmployee(employeeData)
    } catch (error) {
        console.log(error);
    }
})

export default employeeSlice.reducer