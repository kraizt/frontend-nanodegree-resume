/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*display all*/

projects.display();
bio.display();
work.display();
education.display();

/*bio section*/
var bio = {
    "name": "Adimas Lutfi Wicaksono",
    "role": "Front-end web developer",
    "contacts": {
        "mobile": "665-555-5555",
        "email": "adimaslutfi@hotmail.com",
        "github": "kraizter",
        "twitter": "@adimaslutfi",
        "blog": "kraizter.me",
        "location": "yogyakarta, indonesia"
    },
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ad, omnis totam iusto quia? Excepturi itaque quaerat quia unde delectus rem error, dignissimos, in iusto dolores vero quos corrupti at.",
    "skills": [
        "photoshop",
        "javascript",
        "html/css",
        "php",
        "laravel",
    ],
    "biopic": "images/fry.jpg",
    "display": function() {
        displayGeneric(HTMLheaderRole, "%data%", bio.role, "#header", "prepend");
        displayGeneric(HTMLheaderName, "%data%", bio.name, "#header", "prepend");

        displayGeneric(HTMLmobile, "%data%", bio.contacts.mobile, "#topContacts, #footerContacts");
        displayGeneric(HTMLemail, "%data%", bio.contacts.email, "#topContacts, #footerContacts");
        displayGeneric(HTMLtwitter, "%data%", bio.contacts.twitter, "#topContacts, #footerContacts");
        displayGeneric(HTMLgithub, "%data%", bio.contacts.github, "#topContacts, #footerContacts");
        displayGeneric(HTMLblog, "%data%", bio.contacts.blog, "#topContacts, #footerContacts");
        displayGeneric(HTMLlocation, "%data%", bio.contacts.location, "#topContacts, #footerContacts");
        displayGeneric(HTMLbioPic, "%data%", bio.biopic, "#header");
        displayGeneric(HTMLwelcomeMsg, "%data%", bio.welcomeMessage, "#header");

        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skills) {
            displayGeneric(HTMLskills, "%data%", skills, "#skills");
        });
    }
};

/*work section*/
var work = {
    "jobs": [{
        "employer": "Telkom University",
        "title": "Lecture assistant",
        "dates": "2012-2015",
        "location": "Bandung, indonesia",
        "description": "i help lecturer during the class, preparing material needed for practical session, also make module"
    }, {
        "employer": "Sewatama Sumberdaya",
        "title": "Web developer, support officer",
        "dates": "2015-2016",
        "location": "Jakarta, indonesia",
        "description": "i work as freelance about 4 month outsource here, and became internship for 3 months, and 6 month work contract",
    }],
    "display": function() {
        $('#workExperience').append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            displayWork(job.employer, job.title, job.dates, job.location, job.description);
        });

        function displayWork(employer, title, dates, location, description) {
            displayGeneric(HTMLworkEmployer, "%data%", employer, ".work-entry");
            displayGeneric(HTMLworkTitle, "%data%", title, ".work-entry");
            displayGeneric(HTMLworkLocation, "%data%", dates, ".work-entry");
            displayGeneric(HTMLworkLocation, "%data%", location, ".work-entry");
            displayGeneric(HTMLworkDescription, "%data%", description, ".work-entry");
        }
    }
};

/*project section*/
var projects = {
    "projects": [{
        "title": "Sewatama dashboard",
        "dates": "2015-2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus debitis nihil necessitatibus fugit veniam quos, unde distinctio similique tempore voluptatem rem dicta officia quas repudiandae quaerat numquam, dolores minus. Odit.",
        "images": [
            "images/featured-work1.png", "images/featured-work1.png", "images/featured-work1.png",
        ],
    }],
    "display": function() {
        $('#projects').append(HTMLprojectStart);
        projects.projects.forEach(function(project) {
            displayProject(project.title, project.dates, project.description);
            project.images.forEach(function(images) {
                displayGeneric(HTMLprojectImage, "%data%", images, ".project-entry");
            });
        });

        function displayProject(title, dates, description) {
            displayGeneric(HTMLprojectTitle, "%data%", title, ".project-entry");
            displayGeneric(HTMLprojectDates, "%data%", dates, ".project-entry");
            displayGeneric(HTMLprojectDescription, "%data%", description, ".project-entry");
        }
    }

};

/*education section*/

var education = {
    "schools": [{
        "name": "Telkom University",
        "location": "Bandung, indonesia",
        "degree": "Diploma",
        "major": ["Computer Engineering"],
        "dates": "2013",
        "url": "http://telkomuniversity.ac.id/"
    }, {
        "name": "Binus University",
        "location": "Jakarta, indonesia",
        "degree": "Bachelor",
        "majors": "Infomation System",
        "dates": "2016",
        "url": "http://binus.ac.id",
    }, ],
    "onlineCourses": [{
        "title": "Front-end web development nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://classroom.udacity.com",
    }],
    "display": function() {
        $('#education').append(HTMLschoolStart);

        function displaySchools(name, location, degree, majors, date, url) {
            displayGeneric(HTMLschoolName, "%data%", name, ".education-entry");
            displayGeneric(HTMLschoolDegree, "%data%", degree, ".education-entry");
            displayGeneric(HTMLschoolDates, "%data%", date, ".education-entry");
            displayGeneric(HTMLschoolMajor, "%data%", majors, ".education-entry");
            displayGeneric(HTMLschoolLocation, "%data%", location, ".education-entry");
            displayGeneric(HTMLonlineURL, "%data%", url, ".education-entry");
        }

        education.schools.forEach(function(schools) {
            displaySchools(schools.name, schools.location, schools.degree, schools.majors, schools.dates, schools.url);
        });

        $('.education-entry').append(HTMLonlineClasses);

        function displayOnlineClass(title, school, dates, address) {
            displayGeneric(HTMLonlineTitle, "%data%", title, ".education-entry");
            displayGeneric(HTMLonlineSchool, "%data%", school, ".education-entry");
            displayGeneric(HTMLonlineDates, "%data%", dates, ".education-entry");
            displayGeneric(HTMLonlineURL, "%data%", address, ".education-entry");
        }

        education.onlineCourses.forEach(function(online) {
            displayOnlineClass(online.title, online.school, online.dates, online.url);
        });

    }
};

$('#mapDiv').append(googleMap);

function displayGeneric(helperName, placeholder, data, target, subMode) {
    if (subMode === "prepend") {
        $(target).prepend(helperName.replace(placeholder, data));
    } else {
        $(target).append(helperName.replace(placeholder, data));
    }
}