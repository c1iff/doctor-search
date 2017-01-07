var DoctorSearch = require('./../js/doctor-search.js').doctorModule;

var displayDoctors = function(results) {
  results.data.forEach(function(each) {
    console.log(each);
    var distanceString = "";
    if (parseInt(each.practices[0].distance) === 0) {
      distanceString = 'Less Than 1 Mile Away</a>';
    } else if(parseInt(each.practices[0].distance) === 1){
      distanceString = parseInt(each.practices[0].distance) + ' Mile Away</a>';
    }else {
      distanceString = parseInt(each.practices[0].distance) + ' Miles Away</a>';
    }
    $('#results').append('<div class="card horizontal">' +
                            '<div class="valign-wrapper">' +
                              '<img id="profile-pic" src="' + each.profile.image_url +'" class="circle responsive-img">' +
                            '</div>' +
                            '<div class="card-stacked">' +
                              '<div class="card-content">' +
                                '<h3>'+ each.profile.last_name + ', ' + each.profile.first_name + ' ' + each.profile.middle_name.charAt(0) + ', ' + each.profile.title + '</h3>'+
                                '<h4>' + each.specialties[0].name + '</h4><hr>' +
                                '<p>' + each.practices[0].visit_address.street + '</p>' +
                                '<p>' + each.practices[0].visit_address.city + ', ' + each.practices[0].visit_address.state + '</p>' +
                                '<p>' + 'Physician ID: ' + each.npi +'</p>' +
                                '<a href="#">' + each.practices[0].phones[0].number + '</a>' +
                              '</div>' +
                              '<div class="card-action">' +
                                '<a href="http://maps.google.com/maps?q=loc:' + each.practices[0].visit_address.lat + ',' + each.practices[0].visit_address.lon + '" target="_blank">' + distanceString +
                              '</div>' +
                            '</div>' +
                          '</div>');
    });
  };

  var displaySpecialties = function(results) {
    results.data.forEach(function(each) {
      $('select').material_select();
      $('#specialties-select').append('<option value="' + each.uid + '">' + each.name + '</option>');
      });
      $('#loading').toggle();
      $('#search-name').toggle();
    };



$(document).ready(function(){

  $('#condition-toggle').click(function() {
    $('#results').empty();
    $('#loading').hide();
    $('#search-name').hide();
    $('#search-condition').show();
  })
  $('#doctor-name-toggle').click(function() {
    $('#results').empty();
    $('#search-condition').hide();
    $('#loading').show();
    var newSpecialtyList = new DoctorSearch();
    newSpecialtyList.getSpecialties(displaySpecialties);
  })
  $('#search').click(function() {
    $('#results').empty();
    var newSearch = new DoctorSearch();
    var searchValue = $('#search-value').val();
    newSearch.getDoctors(searchValue, displayDoctors);
  });
  $('#search-name-button').click(function() {
    console.log('button clicked');
    $('#results').empty();
    var newSearch = new DoctorSearch();
    var searchName = $('#search-value').val();
    var specialtieSearch = $('#specialties-select').val();
    newSearch.getDoctorsByName(searchName, specialtieSearch, displayDoctors);
  });
});
