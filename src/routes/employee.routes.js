const express = require('express');
const router = express.Router();

const employeeController = require('./../controllers/employee.controller');

router.get('/', employeeController.getEmployees);

router.post('/', employeeController.storeEmployee);

router.get('/:id', employeeController.getEmployeeById);

router.put('/:id', employeeController.updateEmployee);

router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;