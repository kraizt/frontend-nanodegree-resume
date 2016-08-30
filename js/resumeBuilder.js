/*
This is empty on purpose! Your code to build the resume will go here.
 */
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
    "welcomeMessege": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ad, omnis totam iusto quia? Excepturi itaque quaerat quia unde delectus rem error, dignissimos, in iusto dolores vero quos corrupti at.",
    "skills": [
        "photoshop",
        "javascript",
        "html/css",
        "php",
        "laravel"
    ],
    "pic": "images/fry.jpg",
};

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
};

var projects = {
    "projects": [{
        "title": "Sewatama dashboard",
        "dates": "2015-2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus debitis nihil necessitatibus fugit veniam quos, unde distinctio similique tempore voluptatem rem dicta officia quas repudiandae quaerat numquam, dolores minus. Odit.",
        "images": [
            "images/featured-work1.png", "images/featured-work1.png", "images/featured-work1.png",
        ],
    }, ],

};

var education = {
    "schools": [{
        "name": "Telkom University",
        "location": "Bandung, indonesia",
        "degree": "Diploma",
        "major": ["Computer Engineering"],
        "dates": "2013",
    }, {
        "name": "Binus University",
        "location": "Jakarta, indonesia",
        "degree": "Bachelor",
        "major": "Infomation System",
        "dates": "2016",
    }, ],
    "onlineCourses": [{
        "title": "Front-end web development nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://classroom.udacity.com",
    }],
};


displayGeneric(HTMLheaderRole, "%data%", bio.role, "#header", "prepend");
displayGeneric(HTMLheaderName, "%data%", bio.name, "#header", "prepend");

displayGeneric(HTMLmobile, "%data%", bio.contacts.mobile, "#topContacts");
displayGeneric(HTMLemail, "%data%", bio.contacts.email, "#topContacts");
displayGeneric(HTMLtwitter, "%data%", bio.contacts.twitter, "#topContacts");
displayGeneric(HTMLgithub, "%data%", bio.contacts.github, "#topContacts");
displayGeneric(HTMLblog, "%data%", bio.contacts.blog, "#topContacts");
displayGeneric(HTMLlocation, "%data%", bio.contacts.location, "#topContacts");
displayGeneric(HTMLbioPic, "%data%", bio.pic, "#header");
displayGeneric(HTMLwelcomeMsg, "%data%", bio.welcomeMessege, "#header");

$('#header').append(HTMLskillsStart);
bio.skills.forEach(function(skills) {
    displayGeneric(HTMLskills, "%data%", skills, "#skills");
});

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

$('#education').append(HTMLschoolStart);

function displaySchools(name, location, degree, major, date) {
    displayGeneric(HTMLschoolName, "%data%", name, ".education-entry");
    displayGeneric(HTMLschoolDegree, "%data%", degree, ".education-entry");
    displayGeneric(HTMLschoolDates, "%data%", date, ".education-entry");
    displayGeneric(HTMLschoolMajor, "%data%", major, ".education-entry");
    displayGeneric(HTMLschoolLocation, "%data%", location, ".education-entry");
}

education.schools.forEach(function(schools) {
    displaySchools(schools.name, schools.location, schools.degree, schools.major, schools.dates);
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

$('#mapDiv').append(googleMap);


function displayGeneric(helperName, placeholder, data, target, subMode) {
    if (subMode === "prepend") {
        $(target).prepend(helperName.replace(placeholder, data));
    } else {
        $(target).append(helperName.replace(placeholder, data));
    }
}