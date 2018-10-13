import axios from "axios";

export default {
  getCompanies: function() {
    return axios.get("/api/companies");
  },

  getCompany: function(params) {
    return axios.get("/api/companies/" + { params });
  },

  deleteCompany: function(id) {
    return axios.delete("/api/companies/" + id);
  },

  saveCompany: function(companyData) {
    return axios.post("/api/companies", companyData);
  },

 
  }