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

function locationizer1(work_obj) {
    var locationArray = [];
    work_obj.jobs.forEach(function(job){
        locationArray.push(job.location);
    });
    return locationArray;
}

function locationizer2(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
    	locationArray.push(work_obj.jobs[job].location);
    }
    return locationArray;
}


console.log(locationizer1(work));
console.log(locationizer2(work));