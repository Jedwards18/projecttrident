import axios from "axios";

export default {
  getCompanies: function() {
    return axios.get("/api/companies");
  },

  getCompany: function(id) {
    return axios.get("/api/companies/" + id);
  },

  deleteCompany: function(id) {
    return axios.delete("/api/companies/" + id);
  },

  saveCompany: function(companyData) {
    return axios.post("/api/companies", companyData);
  },

 
  }