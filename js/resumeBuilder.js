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
			"location": "Warsaw",
			"description": "Manage onsite support team"
		},
		{
			"employer": "IPPT",
			"position": "Frontend Developer",
			"dates": "2013-2014",
			"location": "Warsaw",
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
			"images": ['images/biocentrum.jpg']
		},
		{
			"title": "Frontend developer resume",
			"dates": "2018",
			"description": "Udacity Front-end Nanodegree project.",
			"images": ['images/udacity-portfolio-site_small.jpg']
		}
	]
};

var education = {
	"schools": [
		{
			"name": "UW",
			"city": "Warsaw",
			"degree": "Masters",
			"major": "Mathematics"
		}],
	"onlineCourses": [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"date": "2018",
			"url": "www.udacity.com"
		}
	]
};

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {
		$("#skills").append(HTMLskills.replace("%data%", skill));
	})
}


	
function displayWork() {
	work.jobs.forEach(function(job) {
	$("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployerTitle = 
		HTMLworkEmployer.replace("%data%", job.employer) +
		HTMLworkTitle.replace("%data%", job.position);
	$(".work-entry:last").append(formattedWorkEmployerTitle);
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));

	//$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
	console.log(job.position);
	});
}

displayWork()