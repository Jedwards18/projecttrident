const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  username: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true},
  password: {type: String, required: true },
  yelp: { type: String },
  twitter: { type: String },
 });

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
