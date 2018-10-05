const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  company: { type: String, required: true, unique: true},
  yelp: { type: String, required: true },
  twitter: { type: String, required: true },
 });

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
