const Employee = require('../model/employeeSchema')

// get all Employee
const getEmployees = async (req,res)=>{
    const allEmployees = await Employee.find()
    res.send(allEmployees)
}
// get single Employee
const getSingleEmployee = async (req,res)=>{
    const employee = await Employee.findById(req.params.id)
    if(!employee){
        res.status(404)
        res.json({error : "Not Found"})
    }else{
        res.status(200)
        res.json(employee)
    }
}

//Update Employee Data
const updateEmployee = async (req,res)=>{
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id , req.body)
    if(!updatedEmployee){
        res.status(400)
        res.json({error : "Not Updated"})
    }else{
        res.status(200)
        res.json(updatedEmployee)
    }
}

//Delete Employee 
const deleteEmployee = async (req,res)=>{
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id)
    res.json({msg : "deleted"})
}

// create new Employee
const createEmployee = async (req,res)=>{
    const {name , email , role , salary , isRemote , exprience} = req.body
    if(!name || !email || !role || !salary || !isRemote){
        res.send('Plz fill all filds')
    }   
    const newEmployee = await Employee.create(req.body)
    if(!newEmployee){
        res.status(400)
        res.send('Cannot created new Employee')
    }else{
        res.status(200)
        res.send(newEmployee)
    }

}


module.exports = {getEmployees , createEmployee , getSingleEmployee , updateEmployee , deleteEmployee}