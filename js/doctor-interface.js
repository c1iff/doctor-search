var DoctorSearch = require('./../js/doctor-search.js').doctorModule;

$(function(){
  var newSearch = new DoctorSearch()
  newSearch.getDoctors('broken leg')
});
