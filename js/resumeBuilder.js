/*
Resume builder script file
*/
 
var bio = {
	"name"		: "Rafał Gawlik",
 	"role"		: "Web Developer",
 	"contacts" : {
		"mobile"	: "+48 604 508 733",
		"email"		: "obiwan314@gmail.com",
		"github"	: "obiwan31415",
		"location"	: "Warsaw"
 	},
 	"welcomeMessage": "Live long and prosper",
	"skills"	: ["awesomness", "programming", "teaching", "JS"],
	"bioPic"	: "images/cat.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "AZ",
			"position": "Helpdesk Manager",
			"dates": "2015-in progress",
			"location": "Warsaw1",
			"description": "Manage onsite support team"
		},
		{
			"employer": "IPPT",
			"position": "Frontend Developer",
			"dates": "2013-2014",
			"location": "Warsaw2",
			"description": "Manage license servers, maintain Matlab Cluster"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Biocentrum Ochota - GRAFEN",
			"dates": "2014",
			"description": "User manual for Grafen cluster.",
			"images": ['images/biocentrum.png','images/biocentrum2.png']
		},
		{
			"title": "Frontend developer resume",
			"dates": "2018",
			"description": "Udacity Front-end Nanodegree project.",
			"images": ["images/resume.png"]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Warsaw University",
			"degree": "Masters",
			"major": "Mathematics",
			"dates": "1993-2003",
			"city": "Warsaw"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "January 2018",
			"url": "www.udacity.com"
		},
		{
			"title": "HTML Fundamentals",
			"school": "SoloLearn",
			"dates": "January 2018",
			"url": "www.sololearn.com"
		}
	]
};

bio.display = function () {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill) {
			$("#skills").append(HTMLskills.replace("%data%", skill));
		})
	}
}

work.display = function (){
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployerTitle = 
			HTMLworkEmployer.replace("%data%", job.employer) +
			HTMLworkTitle.replace("%data%", job.position);
		$(".work-entry:last").append(formattedWorkEmployerTitle);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
	});
}

projects.display = function() {
	projects.projects.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
		if (project.images.length > 0) {
			for (image in project.images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.images[image]));
			}
		}		
	});
}

education.display = function() {
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(
			HTMLschoolName.replace("%data%", school.name) + 
			HTMLschoolDegree.replace("%data%", school.degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.major));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.city));
	});
	$("#education").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(
			HTMLonlineTitle.replace("%data%", course.title) + 
			HTMLonlineSchool.replace("%data%", course.school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
	});
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
//initializeMap();
