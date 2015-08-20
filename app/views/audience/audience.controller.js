angular.module('app').controller('audienceController', function ($scope, $http) {

/********************************
  AUDIENCE - MODELS
********************************/

// Audience - Model - Countries

$scope.audienceCountries = function () {

};

// Audience - Model - Cities

$scope.audienceCities = function () {

};

// Audience - Model - Metros

$scope.audienceMetros = function () {

};

// Audience - Model - Zip Codes

$scope.audienceZipCodes = function () {

};

// Audience - Model - Age Range

$scope.ageRangeFloor = function () {

};

$scope.ageRangeCeiling = function () {

};

// Audience - Model - Gender

	// Goes straight to AUDIENCE - FINAL JSON OBJECT

// Audience - Model - Kids?


});



/********************************
  AUDIENCE - FACTORIES
********************************/

// Audience - Factory - Countries
app.factories('AudienceCountries', function($http) {
	var baseUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/api/country/name/';
	var searchUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/search/country/name/';

	//$http.get('baseUrl' + $scope.audienceCountries)

	//$http.post()	

});

// Audience - Factory - Cities
app.factories('AudienceCities', function($http) {
	var baseUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/api/city/';
	var searchUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/search/city/';
});

// Audience - Factory - Metros
app.factories('AudienceMetros', function($http) {
	var baseUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/api/metro/';
	var searchUrl = 'https://beta.api.lfxdev2.liveintent.iponweb.net/v1_0/search/metro/';
});

// Do we need to use an outside API for this, such as the USPS API ???
app.factories('AudienceZipCodes', function($https) {
	var baseUrl = '';
	var searchUrl = '';
});

/*
 * ??? Are we packaging up each tab's results into a JSON object ???
 */



/********************************
  AUDIENCE - FINAL JSON OBJECT
********************************/

app.provider('AudienceTab', function() {

/**
 * 	AUDIENCE TAB JSON OBJECT
 *
 *		audienceTab { 
 *			audienceCountries: [],
 *			audienceCities: [],
 *			audienceMetros: [],
 *			audienceZipCodes: [],
 *			audienceAgeRangeFloor: int,
 *			audienceAgeRangeCeiling: int,
 *			audienceGenderFemale: boolean,
 *			audienceGenderMale: boolean,
 *			audienceKidsYes: boolean,
 *			audienceKidsNo: boolean,
 *		}
 */

// Audience - Provider - Countries

// Audience - Provider - Cities

// Audience - Provider - Metros

// Audience - Provider - Zip Codes

// Audience - Provider - Age Range

// Audience - Provider - Gender

if ($scope.audienceGenderFemale) {
	audienceTab.audienceGenderFemale(true);

} else {
	audienceTab.audienceGenderFemale(false);
}

if ($scope.audienceGenderMale) {
	audienceTab.audienceGenderMale(true);

} else {
	audienceTab.audienceGenderMale(false);
}

// Audience - Model - Kids?

if ($scope.audienceKidsYes) {
	audienceTab.audienceKidsYes(true);

} else {
	audienceTab.audienceKidsYes(false);
}

if ($scope.audienceKidsNo) {
	audienceTab.audienceKidsNo(true);

} else {
	audienceTab.audienceKidsNo(false);
}


});