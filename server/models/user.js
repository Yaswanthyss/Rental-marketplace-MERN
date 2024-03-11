const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

// Define your user schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, "7d62e58c2b8686f361be5d438380bb7a3e91d2f36c4aafe24d96b0c1675d88d3", {
        expiresIn: "7d",
    });
    return token;
};


const User = mongoose.model("user", userSchema);


const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = { User, validate };