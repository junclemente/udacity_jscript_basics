 var bio = {
  "name": "Jun Clemente",
  "role": "Web Developer",
  "welcomeMessage": "Hello! Welcome to my portfolio!",
  "contacts": {
    "mobile": "858.217.5862",
    "email": "junclemente@outlook.com",
    "github": "kajun",
    "location": "San Diego, CA"
  },
  "url": "images/boardmeeting.jpg",
  "skills": [ "HTML5", "CSS3", "JavaScript", "jQuery", "Python", "MySQL", "Flask", "SQLAlchemy"]
};

var work = {
  "jobs": [
    {
      "employer": "American Peptide Co., Inc.",
      "title": "Corporate Safety and IT Specialist",
      "location": "Vista, CA",
      "dates": "2014 - present",
      "description": "Developed and maintained a secure, dynamic safety training website from scratch using Python, Flask, MySQL, SQLAlchemy, JavaScript, HTML, CSS, Bootstrap; developed web app based on user requirements to assist employees in performing job duties; maintained and managed IT network as system administrator of both company sites in Vista and Sunnyvale, CA; planned and managed successful network upgrade and migration with a 3rd party vendor; performed root cause analysis and investigations for Corrective and Preventive Actions (CAPA) for safety incidents / accidents; performed duties expected of environmental health and safety officer"
    },
    {
      "employer": "American Peptide Co., Inc.",
      "title": "Quality Control Analyst, Microbiology and EHS Coordinator",
      "location": "Vista, CA",
      "dates": "2003 - 2014",
      "description": "Developed a dropbox-hosted static safety training website using HTML, CSS and JavaScript; developed a simple Python script to assist in data analysis; composed standard operating procedures for quality control analysis as required; performed root cause analysis and investigations for CAPA for out-of-specification (OOS) test results; performed other required Laboratory duties in a cGMP (current Good Manufacturing Practices) environment"
    },
    {
      "employer": "Pacific Pathology, Inc.",
      "title": "Laboratory Assistant",
      "location": "San Diego, CA",
      "dates": "1996 - 2003",
      "description": "Developed static website using HTML giving the company its first web presence; assisted pathologist and performed other required lab duties"
    },
    {
      "employer": "Production Labs, Inc.",
      "title": "Quality Assurance Microbiologist",
      "location": "Vista, CA",
      "dates": "2001 - 2002",
      "description": "Developed environmental and water sampling standard operating procedures per ISO 9001 requirements; performed root cause investigations to determine cause of non-conforming materials/products to provide recommendations for CAPA plan"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Peptide Sequence Conversion Tool",
      "dates": "2014",
      "description": "A web app built using Python and Flask that converts the 1-letter representation of an amino acid chain into its 3-letter equivalent",
      "images": [ "images/peptool1.jpg", "images/peptool2.jpg", "images/peptool3.jpg"]
    },
    {
      "title": "APC Safety Training Website",
      "dates": "2014 - present",
      "description": "A secure website developed using Python, Flask, MySQL, and SQLAlchemy to provide web-based safety training and tracking.",
      "images": [ "images/apc_safety1.jpg", "images/apc_safety2.jpg", "images/apc_safety3.jpg"]
    },
    {
      "title": "GS Communication, Inc.",
      "dates": "2015",
      "description": "A website developed for the client GS Communication using Python, Flask, HTML, CSS, and Bootstrap.",
      "images": [ "images/gscom1.jpg", "images/gscom2.png", "images/gscom3.png" ]
    }
  ]
};


var education = {
  "schools": [
    {
      "name": "Kelley School of Business, Indiana University",
      "location": "Indiana, IN",
      "degree": "Executive Certificate",
      "majors": [ "Executive Certificate in the Business of Life Science (ECBLS" ],
      "dates": "2009",
      "url": "http://kelley.iu.edu/"
    },
    {
      "name": "University of California, San Diego - Extensions",
      "location": "La Jolla, CA",
      "degree": "Certificate",
      "majors": [ "Field Chemistry Certificate" ],
      "dates": "2000",
      "url": "http://extension.ucsd.edu/"
    },
    {
      "name": "University of California, San Diego",
      "location": "La Jolla, CA",
      "degree": "Bachelors of Science",
      "majors": [ "Microbiology", " Minors: Classical European Studies", "Music Technology" ],
      "dates": "1999",
      "url": "https://ucsd.edu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Web Developer Nanodegree",
      "school": "Udacity.com",
      "dates": "2016",
      "url": "http://www.udacity.com/"
    },
    {
      "title": "Python and Web Development",
      "school": "Thinkful.com",
      "dates": "2014",
      "url": "http://www.thinkful.com"
    },
    {
      "title": "Programming for Everybody (Python)",
      "school": "Coursera.com",
      "dates": "2015",
      "url": "http://www.coursera.com"
    },
    {
      "title": "An Introduction to Interactive Programming in Python",
      "school": "Coursera.com",
      "dates": "2014",
      "url": "http://www.coursera.com"
    },
    {
      "title": "R Programming",
      "school": "Coursera.com",
      "dates": "2014",
      "url": "http://www.coursera.com"
    },
    {
      "title": "The Data Scientist's Toolbox",
      "school": "Coursera.com",
      "dates": "2014",
      "url": "http://www.coursera.com"
    },
    {
      "title": "Bootstrap Basics: Program Responsive Websites",
      "school": "Udemy.com",
      "dates": "2015",
      "url": "http://www.udemy.com"
    },
    {
      "title": "Learn Python the Hard Way, 2nd Ed",
      "school": "Udemy.com",
      "dates": "2013",
      "url": "http://www.udemy.com"
    }
  ]
};

// Format and Display Bio JSON
bio.display = function() {
  // Name and Role
  var formattedName = HTMLheaderName.replace( "%data%", bio.name );
  var formattedRole = HTMLheaderRole.replace( "%data%", bio.role );
  var formattedNameRole = formattedName + formattedRole;
  $("#header").prepend(formattedNameRole);
  // Welcome Message
  var formattedWelcomeMesage = HTMLwelcomeMsg.replace( "%data%", bio.welcomeMessage );
  $("#header").append(formattedWelcomeMesage);
  // Bio Picture
  var formattedBioPic = HTMLbioPic.replace( "%data%", bio.url );
  $("#header").append(formattedBioPic);
  // Bio Skills
  // Check if bio.skills exist then append skills to the page
  if ( bio.skills.length > 0 ) {
    $("#header:last").append(HTMLskillsStart);
    for ( var i = 0; i < bio.skills.length; i++ ) {
      $("#skills:last").append(HTMLskills.replace( "%data%", bio.skills[i]));
    }
  }
  // Contacts
  for ( var contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace( "%contact%", contact );
    formattedContact = formattedContact.replace( "%data%", bio.contacts[contact] );
    // Append contact info to top and footer
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);
  }
};

bio.display();

// Format and Display work JSON
work.display = function () {
  for ( var job in work.jobs ) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace( "%data%", work.jobs[job].employer );
    var formattedTitle = HTMLworkTitle.replace( "%data%", work.jobs[job].title );
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append( formattedEmployerTitle );

    var formattedLocation = HTMLworkLocation.replace( "%data%", work.jobs[job].location );
    $(".work-entry:last").append( formattedLocation );

    var formattedDates = HTMLworkDates.replace( "%data%", work.jobs[job].dates );
    $(".work-entry:last").append( formattedDates );

    var formattedDescription = HTMLworkDescription.replace( "%data%", work.jobs[job].description );
    $(".work-entry:last").append( formattedDescription );
  }
};

work.display();


// Adds "Internationalize" button at bottom of webpage
$("#main").append(internationalizeButton);

// Internationalizes name when button is pressed
// Function capitalizes the first letter of the first name and capitalizes all letters on the last name.
function inName() {
  var fullName = bio.name.split(' ');
  var fName = fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1);
  var lName = fullName[1].toUpperCase();
  fullName = fName + ' ' + lName;
  return fullName;
}

inName();

// Add display method to projects
projects.display = function() {
  for ( var project in projects.projects ) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace( "%data%", projects.projects[project].title );
    $(".project-entry:last").append(formattedProjectTitle);
    var formattedProjectDates = HTMLprojectDates.replace( "%data%", projects.projects[project].dates );
    $(".project-entry:last").append(formattedProjectDates);
    var formattedProjectDescription = HTMLprojectDescription.replace( "%data%", projects.projects[project].description );
    $(".project-entry:last").append(formattedProjectDescription);
    if (projects.projects[project].images.length > 0) {
      for ( var img in projects.projects[project].images) {
        var formattedProjectImages = HTMLprojectImage.replace( "%data%", projects.projects[project].images[img]);
        $(".project-entry:last").append(formattedProjectImages);
      }
    }
  }
};

projects.display();

// Add display method to education
education.display = function() {
  // Display Education
  for ( var school in education.schools ) {
    $("#education").append(HTMLschoolStart);
    // Format School Name, URL, and Degree and append
    var formattedSchoolName = HTMLschoolName.replace( "%data%", education.schools[school].name );
    formattedSchoolName = formattedSchoolName.replace( "#", education.schools[school].url );
    var formattedSchoolDegree = HTMLschoolDegree.replace( "%data%", education.schools[school].degree );
    var schoolNameDegree = formattedSchoolName + formattedSchoolDegree; // Combine School Name, URL, and Degree
    $(".education-entry:last").append(schoolNameDegree);
    // Format Dates and append
    var formattedSchoolDate = HTMLschoolDates.replace( "%data%", education.schools[school].dates );
    $(".education-entry:last").append(formattedSchoolDate);
    // Format LOcation and append
    var formattedSchoolLocation = HTMLschoolLocation.replace( "%data%", education.schools[school].location );
    $(".education-entry:last").append(formattedSchoolLocation);
    // Format majors and append
    var formattedSchoolMajor = HTMLschoolMajor.replace( "%data%", education.schools[school].majors );
    $(".education-entry:last").append(formattedSchoolMajor);
  }

  // Display Online Courses
  if ( education.onlineCourses ) {
    $(".education-entry:last").append(HTMLonlineClasses);
    for ( var online in education.onlineCourses ) {
      // Format Online Course Title and School Name
      var formattedOnlineTitle = HTMLonlineTitle.replace( "%data%", education.onlineCourses[online].title );
      // formattedOnlineTitle = formattedOnlineTitle.replace( "#", education.onlineCourses[online].url );
      var formattedOnlineSchool = HTMLonlineSchool.replace( "%data%", education.onlineCourses[online].school );
      var onlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool; // Combine both Course Title and School Name
      $(".education-entry:last").append(onlineTitleSchool);
      // Format Online Dates
      var formattedOnlineDates = HTMLonlineDates.replace( "%data%", education.onlineCourses[online].dates );
      $(".education-entry:last").append(formattedOnlineDates);
      // Format URL
      var formattedOnlineUrl = HTMLonlineURL.replace( "%data%", education.onlineCourses[online].url );
      formattedOnlineUrl = formattedOnlineUrl.replace( "#", education.onlineCourses[online].url );
      $(".education-entry:last").append(formattedOnlineUrl);
    }
  }
};

education.display();

// Add map
$("#mapDiv").append(googleMap);
