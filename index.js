const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to NodeJs MySQL Application'
    })
})

const employeeRoutes =  require('./src/routes/employee.routes')

app.use('/api/v1/employees', employeeRoutes)

app.listen(3000, () => {
    console.log("server is running on port:3000")
})