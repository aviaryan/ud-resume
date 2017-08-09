var bio = {
  name: 'Avi Aryan',
  role: 'Full stack engineer',
  contacts: {
    mobile: '8581817978',
    email: 'aviaryan123(at)gmail',
    github: 'aviaryan',
    twitter: 'aviaryan123',
    location: 'Gandhinagar, India'
  },
  welcomeMessage: 'I am a newly graduate full stack engineer currently working as a mentor at Udacity and Google Summer of Code.',
  skills: ['Golang', 'Backend', 'Python', 'Flask', 'React', 'Docker'],
  biopic: 'images/avi.jpg'
};

var education = {
  schools: [
    {
      name: 'IIIT Vadodara',
      location: 'Vadodara',
      degree: 'B.Tech',
      majors: ['Computer Science'],
      dates: '2014-18'
    },
  ],
  onlineCourses: [
    {
      title: 'Full Stack ND',
      school: 'Udacity',
      dates: 'July 2017',
      url: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'
    },
    {
      title: 'Android ND',
      school: 'Udacity',
      dates: '2016',
      url: 'https://www.udacity.com/course/android-developer-nanodegree-by-google--nd801'
    }
  ]
};

var work = {
  jobs: [
    {
      employer: 'Appbase.io',
      title: 'Infrastructure Engineer',
      location: 'Delhi',
      dates: '2017',
      description: 'Worked on the Go backend infrastructure of Appbase.io'
    },
    {
      employer: 'Udacity',
      title: 'Mentor',
      location: 'Gandhinagar',
      dates: '2017',
      description: 'Mentored students on full stack and Udacity courses.'
    },
    {
      employer: 'Google Summer of Code',
      title: 'Software Developer',
      location: 'Patna',
      dates: '2016',
      description: 'Worked on a Flask backend server and Docker deployment.'
    },
  ]
};

var projects = {
  projects: [
    {
      title: 'Clipjump',
      dates: '2013-16',
      description: 'Clipboard manager for Windows with 100k downloads.',
      images: ['images/clipjump_1.jpg', 'images/clipjump_2.jpg']
    },
    {
      title: 'Portfolio',
      dates: '2017',
      description: 'Dynamic portfolio built in React'
    }
  ]
};


/*
 * Display functions
 */
bio.display = function() {
  // basic details
  var name = HTMLheaderName.replace("%data%", bio.name);
  var role = HTMLheaderRole.replace("%data%", bio.role);
  var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  // contacts
  var contact = [];
  contact.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
  contact.push(HTMLemail.replace("%data%", bio.contacts.email));
  contact.push(HTMLgithub.replace("%data%", bio.contacts.github));
  contact.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  contact.push(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").prepend(role);
  $("#header").prepend(name);
  $("#header").append(bioPic);
  $("#header").append(message);

  for (i in contact) {
    $("#topContacts").append(contact[i]);
    $("#footerContacts").append(contact[i]);
  }

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(i in bio.skills) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }
};

education.display = function() {
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
    // schools
    for (i in education.schools) {
      $("#education").append(HTMLschoolStart);
      var name = HTMLschoolName.replace("%data%", education.schools[i].name);
      var degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var dates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var location = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var major = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);

      $(".education-entry:last").append(name + degree);
      $(".education-entry:last").append(dates);
      $(".education-entry:last").append(location);
      $(".education-entry:last").append(major);
    }
    // online courses
    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (i in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var dates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var url = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

        $(".education-entry:last").append(title + school);
        $(".education-entry:last").append(dates);
        $(".education-entry:last").append(url);
      }
    }
  }
};

work.display = function() {
  if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    for(i in work.jobs) {
      var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var location = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var worked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var description = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      var title = employer + title;

      $(".work-entry:last").append(title);
      $(".work-entry:last").append(location);
      $(".work-entry:last").append(worked);
      $(".work-entry:last").append(description);
    }
  }
};

projects.display = function() {
  if (projects.projects.length > 0) {
    for (i in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var title = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      var dates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var description = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(title);
      $(".project-entry:last").append(dates);
      $(".project-entry:last").append(description);

      for (img in projects.projects[i].images) {
        var image = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
        $(".project-entry:last").append(image);
      }
    }
  }
};

function setupMap() {
  $("#mapDiv").append(map);
}

// display stuff
bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
window.addEventListener('load', setupMap);
