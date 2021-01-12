'use strict';

const dbConn = require('./../../config/db.config');

const Employee = function(employee) {
    this.first_name     = employee.first_name;
    this.last_name      = employee.last_name;
    this.email          = employee.email;
    this.phone          = employee.phone;
    this.organization   = employee.organization;
    this.designation    = employee.designation;
    this.salary         = employee.salary;
    this.status         = employee.status ? employee.status:1;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};

Employee.getEmployeeById = (id, result) => {
    const query = "SELECT * FROM employees WHERE id =?";

    dbConn.query(query, id, (err, res) => {
        if (err)
        {
            console.log("error: ", err);

            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

Employee.getEmployees = (result) => {
    const query = "SELECT * FROM employees ORDER BY id DESC";

    dbConn.query(query, (err, res) => {
        if (err)
        {
            console.log("error: ", err);

            result(null, res);
        }
        else {
            result(null, res);
        }
    });
};

Employee.store = (newEmployee, result) => {
    const query = "INSERT INTO employees set ? ";

    dbConn.query(query, newEmployee, (err, res) => {
        if (err)
        {
            console.log("error: ", err);

            result(err, null);
        }
        else {
            console.log(res.insertedId);

            result(null, res.insertedId);
        }
    });
}

Employee.update = (employeeId, employee, result) => {
    const query = "UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=? WHERE id=?";

    dbConn.query(
        query,
        [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, employeeId],
        (err, res) => {
            if (err)
            {
                console.log("error: ", err);

                result(null, err);
            }
            else {
                result(null, res);
            }
        }
    );
};

Employee.delete = (id, result) => {
    const query = "DELETE FROM employees WHERE id=?";

    dbConn.query(query, [id], (err, res) => {
        if (err)
        {
            console.log("error: ", err);

            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Employee;