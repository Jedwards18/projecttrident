import axios from "axios";

export default {
  getCompanies: function() {
    return axios.get("/api/companies");
  },

  getCompany: function(params) {
    return axios.get("/api/companies/" + { params });
  },

  deleteCompany: function(id) {
    return axios.delete(`/api/companies/${id}`);
  },

  saveCompany: function(companyData) {
    return axios.post("/api/companies", companyData);
  },

  getSentiment: function(query, term, location) {
    return axios.get(`/api/ext/sentiment/${query}/${term}/${location}`);
  },
 
  getPersonality: function(query, term, location) {
    return axios.get(`/api/ext/personality/${query}/${term}/${location}`);
  },

  getTweets: function(query) {
    return axios.get(`api/ext/tweets/${query}`);
  },

  getYelps: function(term, location) {
    return axios.get(`api/ext/yelps/${term}/${location}`);
  }
}