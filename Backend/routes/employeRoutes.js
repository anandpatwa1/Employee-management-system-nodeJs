const express = require("express")
const { getEmployees, createEmployee, getSingleEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeController")
const router = express.Router()

router.get('/', getEmployees)
router.get('/:id', getSingleEmployee)

router.post('/create', createEmployee)
router.put('/:id', updateEmployee)
router.delete('/:id', deleteEmployee)

module.exports = router