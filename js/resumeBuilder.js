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
			"position": "Helpdesk Manager",
			"employer": "AZ",
			"dates": "2015-current"
		},
		{
			"position": "frontend developer",
			"employer": "IPPT",
			"dates": "2013-2014"
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
