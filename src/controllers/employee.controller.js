'use strict';

var Employee = require('../models/employee.model');

exports.getEmployees = (req, res) => {
    Employee.getEmployees(function(err, employee) {
        if (err)
            res.send(err);
            
        if (employee.length != 0)
        {
            res.send({
                error: false,
                message: "Successfuly to fetch employee data",
                data: employee
            })
        }
        else {
            res.send({
                error: true,
                message: "Failed to fetch employee data"
            })
        }
    });
};

exports.storeEmployee = (req, res) => {
    const newEmployee = new Employee(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0)
    {
        res.status(400).send({
            error: true,
            message: 'Please provide all required field'
        });
    }
    else {
        Employee.store(newEmployee, function(err, employee) {
            if (err)
            res.send(err);
            res.json({
                error:false,
                message: "Employee added successfully"
            });
        });
    }
}

exports.getEmployeeById = (req, res) => {
    Employee.getEmployeeById(req.params.id, (err, employee) => {
        if (err)
        res.send(err);

        if (employee.length != 0) 
        {
            res.send({
                error: false,
                message: "Get employee data successfully",
                data: employee
            })
        }
        else {
            res.send({
                error: true,
                message: "Failed to get employee data"
            })
        }
    });
};

exports.updateEmployee = (req, res) => {
    if ( req.body.constructor === Object && Object.keys(req.body).length === 0)
    {
        res.status(400).send({
            error: true,
            message: 'Please provide all required field'
        });
    }
    else {
        Employee.update(req.params.id, new Employee(req.body), (err, employee) => {
            if (err)
            res.send(err);

            if(employee.affectedRows != 0)
            {
                res.json({
                    error: false,
                    message: 'Employee successfully updated',
                });
            }
            else {
                res.json({
                    error: true,
                    message: 'Employee failed to update',
                })
            }
        });
    }
};

exports.deleteEmployee = (req, res) => {
    Employee.delete(req.params.id, (err, employee) => {
        if (err)
        res.send(err);
        if (employee.affectedRows != 0)
        {
            res.json({
                error: false,
                message: "Employee successfully deleted"
            });
        }
        else {
            res.json({
                error: true,
                message: "Employee failed to delete"
            });
        }
    });
};