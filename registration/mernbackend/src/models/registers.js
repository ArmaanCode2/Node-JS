const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    gender: {type: String, required: true},
    phone: {type: Number, required: true, unique: true},
    age: {type: Number, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true},
});

// now creating a Collection
const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;