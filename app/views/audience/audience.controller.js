angular.module('app').controller('audienceController', function ($scope, $http) {


/********************************
  AUDIENCE - MODELS
********************************/

// Audience - Model - Countries

$scope.audienceCountries

// Audience - Model - Cities

$scope.audienceCities

// Audience - Model - Metros

$scope.audienceMetros

// Audience - Model - Zip Codes

$scope.audienceZipCodes

// Audience - Model - Age Range

$scope.ageRangeFloor

$scope.ageRangeCeiling

// Audience - Model - Gender

$scope.audienceGenderFemale

	if (audienceGenderFemale) {
		return true;

	} else
		return false;

$scope.audienceGenderMale

	if (audienceGenderMale) {
		return true;

	} else
		return false;


// Audience - Model - Kids?

$scope.audienceKidsYes

$scope.audienceKidsNo

});



/********************************
  AUDIENCE - SERVICES
********************************/

// Audience - Service - Countries
app.service('AudienceCountries', function($http) {
	var baseUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/api/country/name/';
	var searchUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/search/country/name/';

	//$http.get('baseUrl' + $scope.audienceCountries)

	//$http.post()	

});

// Audience - Service - Cities
app.service('AudienceCities', function($http) {
	var baseUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/api/city/';
	var searchUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/search/city/';
});

// Audience - Service - Metros
app.service('AudienceMetros', function($http) {
	var baseUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/api/metro/';
	var searchUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/search/metro/';
});

// Do we need to use an outside API for this, such as the USPS API ???
app.service('AudienceZipCodes', function($https) {
	var baseUrl = '';
	var searchUrl = '';
});


/*
 * ??? Are packaging up each tab results into a JSON object
 */


/********************************
  AUDIENCE - FINAL JSON OBJECT
********************************/

app.provider('AudienceTabObject', function() {

});
