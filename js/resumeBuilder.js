/*
This is empty on purpose! Your code to build the resume will go here.
 */

var $header = $("#header"),
	$main = $("#main"),
	$topContacts = $("#topContacts"),
	$footerContacts = $("#footerContacts"),
	$education = $("#education"),
	$mapDiv = $("#mapDiv"),
	$projects = $("#projects"),
	$workExperience = $("#workExperience");


var bio = {
	"name": "Wolfgang Reiter",
	"role": "Web Developer",
	"picture": "http://reiter-osteopathie.de/img/wolfgang-reiter-kl.jpg",
	"contacts": {
		"email": "wolfgang.reiter@br.de",
		"location": "Munich",
		"mobile": "12234",
		"github": "https://github.com/derwolfi",
		"location": "Munich"
	},
	"skills": ["HTML","CSS","Javascript","jQuery","Osteopathie"],
	"welcome": "Welcome to my Webpage!!"
};

// Display my biographie to the Website
bio.display = function() {
	$header.prepend( HTMLheaderRole.replace( "%data%", bio.role) );
	$header.prepend( HTMLheaderName.replace( "%data%", bio.name) );
	
	if(bio.contacts) {
		$topContacts.append( HTMLmobile.replace( "%data%", bio.contacts.mobile ) );
		$topContacts.append( HTMLemail.replace( "%data%", bio.contacts.email ) );
		$topContacts.append( HTMLgithub.replace( "%data%", bio.contacts.github ) );
		$topContacts.append( HTMLlocation.replace( "%data%", bio.contacts.location ) );

		$footerContacts.append( HTMLmobile.replace( "%data%", bio.contacts.mobile ) );
		$footerContacts.append( HTMLemail.replace( "%data%", bio.contacts.email ) );
		$footerContacts.append( HTMLgithub.replace( "%data%", bio.contacts.github ) );
		$footerContacts.append( HTMLlocation.replace( "%data%", bio.contacts.location ) );
	}

	$header.append( HTMLbioPic.replace("%data%", bio.picture ) );
	$(".biopic:first").after( HTMLwelcomeMsg.replace( "%data%", bio.welcome ) );


	if(bio.skills) {
		$header.append( HTMLskillsStart );
		var $skills = $("#skills");
		$(bio.skills).each(function( idx, val ) {
			$skills.append( HTMLskills.replace( "%data%", val ) );
		});
		
	}
};


var education = {
	"schools": [
		{
			"name": "Realschule Vaterstellen",
    		"location": "Neue Poststraße 6, 85598 Vaterstetten",
    		"degree": "Mittlere Reife",
    		"majors": "What evert",
    		"dates": 1990,
    		"url": "http://example.de",
		},
		{
			"name": "COE",
    		"location": "Seidl-Kreuz-Weg 11, 85737 Ismaning",
    		"degree": "D.O Osteopathie",
    		"majors": "What evert",
    		"dates": 2015,
    		"url": "www.osteo-coe.de",
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com"
		}
	]
};

// Display my education to the Website
education.display = function() {
	
	var schools = this.schools;
	for( var school in schools ) {
		$education.append( HTMLschoolStart );
		var item = HTMLschoolName.replace( "%data%", schools[school].name );
		item += HTMLschoolDegree.replace( "%data%", schools[school].degree );
		item += HTMLschoolDates.replace( "%data%", schools[school].dates );
		item += HTMLschoolLocation.replace( "%data%", schools[school].location );
		item += HTMLschoolMajor.replace( "%data%", schools[school].majors );
		$( ".education-entry:last" ).append( item );
	}

	$education.append( HTMLonlineClasses);
	
	var courses = this.onlineCourses;
	for( var course in courses ) {
		$education.find( "h3" ).after( HTMLschoolStart );
		var item = HTMLonlineTitle.replace( "%data%", courses[course].title );
		item += HTMLonlineSchool.replace( "%data%", courses[course].school );
		item += HTMLonlineDates.replace( "%data%", courses[course].dates );
		item += HTMLonlineURL.replace( "%data%", courses[course].url );
		$( ".education-entry:last" ).append( item );
	}

};


var work = {
  "jobs": [
    {
      "employer": "Bayerischer Rundfunk",
      "title": "CMS - Front-End",
      "location": "Munich - Germany",
      "dates": "Feb 2004 - Current",
      "description": "CMS - Front-End Developer."
    },
    {
      "employer": "Wolfgang Reiter",
      "title": "Osteopathie",
      "location": "Munich - Germany",
      "dates": "Sept 2014",
      "description": "Praxis für Osteopathie."
    }
  ]
};

// Display my Work to the Website
work.display = function() {
	
	var jobs = this.jobs;
  	for( var job in jobs ) {
		$workExperience.append( HTMLworkStart );
		var item = HTMLworkEmployer.replace( "%data%", jobs[job].employer );
		item += HTMLworkTitle.replace( "%data%", jobs[job].title );
		item += HTMLworkDates.replace( "%data%", jobs[job].dates );
		item += HTMLworkLocation.replace( "%data%", jobs[job].location );
		item += HTMLworkDescription.replace( "%data%", jobs[job].description );
		$(".work-entry:last").append( item );
	}

};

var projects = {
	"projects": [
		{
			"title": "Project 1",
			"dates": "2014",
			"description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
			"images": [
				{
					"src": "http://placehold.it/350x150"
				},
				{
					"src": "http://placehold.it/300x150"
				}
			]
		},
		{
			"title": "Project 2",
			"dates": "2015",
			"description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
			"images": [
				{
					"src": "http://placehold.it/450x150"
				},
				{
					"src": "http://placehold.it/300x150"
				}
			]
		}
	]
};

// Display Projects to the Website
projects.display = function() {
	
	var projects = this.projects;
	for(var project in projects) {

		$projects.append( HTMLprojectStart );

		var item = HTMLprojectTitle.replace( "%data%", projects[project].title );
		item += HTMLprojectDates.replace( "%data%", projects[project].dates );
		item += HTMLprojectDescription.replace( "%data%", projects[project].description );

		// Project Images
		var images = projects[project].images;
		for( var image  in images ) {
			item += HTMLprojectImage.replace( "%data%", images[image].src );
		}

		$(".project-entry:last").append( item );
	}
};

// Show Data from Objects
projects.display();
bio.display();
work.display();
education.display();

// init Map
$("#mapDiv").append(googleMap);

