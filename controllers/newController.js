const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    res.send({msg: true})
});

router.post('/newEmployee', (req, res) => {
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if(!err) {
            res
            .status(201)
            .send("success")
        }
        else res.send("failed")
    })
})

router.delete('/deleteEmployee', (req, res) => {
    Employee.deleteOne({fullName: "test data"}, (err) => {
        if(!err) res
        .status(200)
        .send("success")
        else res.send("failed")
    })
});
module.exports = router;