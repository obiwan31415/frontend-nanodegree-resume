/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var name = "Rafał Gawlik";
var role = "Web Developer";
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLprojectImage.replace("%data%", bio.bioPic);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
 
$("#header").append(formattedBioPic);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedHTMLwelcomeMsg);

for(i in formattedContactInfo) {
	//$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}
 