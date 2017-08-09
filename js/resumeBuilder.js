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
  var name = HTMLheaderName.replace('%data%', bio.name);
  var role = HTMLheaderRole.replace('%data%', bio.role);
  var bioPic = HTMLbioPic.replace('%data%', bio.biopic);
  var message = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  // contacts
  var contact = [];
  contact.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
  contact.push(HTMLemail.replace('%data%', bio.contacts.email));
  contact.push(HTMLgithub.replace('%data%', bio.contacts.github));
  contact.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
  contact.push(HTMLlocation.replace('%data%', bio.contacts.location));

  $('#header').prepend(role);
  $('#header').prepend(name);
  $('#header').append(bioPic);
  $('#header').append(message);

  contact.forEach(function(c) {
    $('#topContacts').append(c);
    $('#footerContacts').append(c);
  });

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(s) {
      $('#skills').append(HTMLskills.replace('%data%', s));
    });
  }
};

education.display = function() {
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
    // schools
    education.schools.forEach(function(s) {
      $('#education').append(HTMLschoolStart);
      var name = HTMLschoolName.replace('%data%', s.name);
      var degree = HTMLschoolDegree.replace('%data%', s.degree);
      var dates = HTMLschoolDates.replace('%data%', s.dates);
      var location = HTMLschoolLocation.replace('%data%', s.location);
      var major = HTMLschoolMajor.replace('%data%', s.majors[0]);

      $('.education-entry:last').append(name + degree);
      $('.education-entry:last').append(dates);
      $('.education-entry:last').append(location);
      $('.education-entry:last').append(major);
    });
    // online courses
    if (education.onlineCourses.length > 0) {
      $('#education').append(HTMLonlineClasses);
      education.onlineCourses.forEach(function(oc) {
        $('#education').append(HTMLschoolStart);
        var title = HTMLonlineTitle.replace('%data%', oc.title).replace('#', oc.url);
        var school = HTMLonlineSchool.replace('%data%', oc.school);
        var dates = HTMLonlineDates.replace('%data%', oc.dates);
        var url = HTMLonlineURL.replace('%data%', oc.url).replace('#', oc.url);

        $('.education-entry:last').append(title + school);
        $('.education-entry:last').append(dates);
        $('.education-entry:last').append(url);
      });
    }
  }
};

work.display = function() {
  if (work.jobs.length > 0) {
    $('#workExperience').append(HTMLworkStart);
    work.jobs.forEach(function(job) {
      var employer = HTMLworkEmployer.replace('%data%', job.employer);
      var title = HTMLworkTitle.replace('%data%', job.title);
      var location = HTMLworkLocation.replace('%data%', job.location);
      var worked = HTMLworkDates.replace('%data%', job.dates);
      var description = HTMLworkDescription.replace('%data%', job.description);
      var title = employer + title;

      $('.work-entry:last').append(title);
      $('.work-entry:last').append(location);
      $('.work-entry:last').append(worked);
      $('.work-entry:last').append(description);
    });
  }
};

projects.display = function() {
  if (projects.projects.length > 0) {
    projects.projects.forEach(function(pj) {
      $('#projects').append(HTMLprojectStart);
      var title = HTMLprojectTitle.replace('%data%', pj.title);
      var dates = HTMLprojectDates.replace('%data%', pj.dates);
      var description = HTMLprojectDescription.replace('%data%', pj.description);

      $('.project-entry:last').append(title);
      $('.project-entry:last').append(dates);
      $('.project-entry:last').append(description);
      // IMAGES
      if (pj.images) {
        pj.images.forEach(function(img) {
          var image = HTMLprojectImage.replace('%data%', img);
          $('.project-entry:last').append(image);
        });
      }
    });
  }
};

function setupMap() {
  $('#mapDiv').append(map);
}

// display stuff
bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
window.addEventListener('load', setupMap);
