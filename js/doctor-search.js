var apiKey = require('./../.env').apiKey;

function DoctorSearch(){
}

DoctorSearch.prototype.getDoctors = function(medicalIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(results) {
      displayFunction(results);
    })
   .fail(function(error){
      console.log("fail");
    });
};

DoctorSearch.prototype.getSpecialties = function(displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=' + apiKey)
   .then(function(results) {
      displayFunction(results);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = DoctorSearch;
