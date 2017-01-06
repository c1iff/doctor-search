var DoctorSearch = require('./../js/doctor-search.js').doctorModule;

var getDoctors = function(results) {
  results.data.forEach(function(each) {
    console.log(each);
    $('#results').append('<li>Dr.' + each.profile.last_name + '</li>')
  })
}

$(function(){
  $('#search').click(function() {
    console.log('submitted');
    var newSearch = new DoctorSearch();
    searchValue = $('#search-value').val();
    newSearch.getDoctors(searchValue, getDoctors);
  })
});
