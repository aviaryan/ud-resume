var bio = {
  name: 'Avi Aryan',
  role: 'Full stack engineer',
  contacts: {
    mobile: '8581817978',
    email: 'aviaryan123(at)gmail',
    github: 'aviaryan',
    twitter: 'aviaryan123',
    location: 'India'
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



// display stuff
bio.display();
education.display();

