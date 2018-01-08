/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 //$("#main").append("Rafał Gawlik");
 var email = "obiwan1702@wp.pl";
 var newEmail = email.replace("wp.pl", "outlook.com");
 var name = "Rafał Gawlik";
 var role = "Web Developer";
 var bio ={
 	"firstName" : "Rafał",
 	"lastName"	: "Gawlik",
 	"name"		: "Rafał Gawlik",
 	"age"		: "49",
 	"role"		: "Web Developer",
 	"contact"	: "obiwan314@gmail.com",
 	"imageURL"	: "images/cat.jpg",
 	"welcomeMsg": "Live long and prosper",
 	"skills"	: ["awesomness", "programming", "teaching", "JS"]
 };

 console.log(newEmail);
 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedImage = HTMLprojectImage.replace("%data%", bio.imageURL);
 //$("#header").append(formattedName);
 //$("#header").append(formattedRole);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").prepend(formattedImage);