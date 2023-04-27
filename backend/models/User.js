const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

// define  User schema
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// use UniqueValidator plugin
userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);
