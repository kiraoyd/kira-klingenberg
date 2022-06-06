//Get resume data
const exp = [
  {
    title: "Instructor (GTA)",
    org: "Portland State University",
    course: "CS161 - Intro to Program & Problem Solving",
    department: "Maseeh College of Engineering and Computer Science",
    date: "Summer Term 2022",
  },
  {
    title: "Graduate Teaching Assistant (GTA)",
    org: "Portland State University",
    course: "CS161 - Intro to Program & Problem Solving",
    department: "Maseeh College of Engineering and Computer Science",
    date: "Mar 2022 - present   ·  4 mos",
  },
  {
    title: "Technical Course Support Specialist (TCSS)",
    org: "Portland State University",
    course: "CS161 - Intro to Program & Problem Solving",
    department: "Maseeh College of Engineering and Computer Science",
    date: "Jan 2019 - Mar 2022 · 3 yrs 3 mos",
  },

  {
    title: "Technical Course Support Specialist (TCSS)",
    org: "Portland State University",
    course:
      "CS162 - Intro to Computer Science, CS163 - Data Structures , CS202 - Object Oriented Programming",
    department: "Maseeh College of Engineering and Computer Science",
    date: "Sep 2021 - Mar 2022 ·  7 mos",
  },

  {
    title: "Education Mentor",
    org: "Portland State University",
    course: "Invention Bootcamp",
    department: "Maseeh College of Engineering and Computer Science",
    date: "Jun 2021 - Aug 2021 ·     3 mos",
  },

  {
    title: "President & Project Director",
    org: "Science Project",
    course: "",
    department: "Education Non-profit Organization",
    date: "2013 - 2018 · 5 yrs",
  },

  {
    title: "Mate/Crewmember",
    org: "Trader Joes",
    course: "",
    department: "Mate: Apr 2014 - Mar 2017 ·   3 yrs",
    date: "Crewmember: Sep 2005 - Jul 2021 ·   15yrs 11mos",
  },
];

const edu = [
  {
    school: "Portland State University",
    earned: "MS - Computer Science",
    date: "2018 - Present",
  },
  {
    school: "Portland Community College",
    earned: "Biology/Chemistry",
    date: "2013 - 2015",
  },
  {
    school: "Portland State University",
    earned: "BA - Buisness Admin/HR",
    date: "2003 - 2008",
  },
];

let experience = document.querySelector("#experience");

//create work container
const myWork = document.createElement("div");
myWork.classList.add("myWork");
//create container for header icon and text
const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");
//create img for icon
const square = document.createElement("img");
square.classList.add("work-icon");
square.src = "images/square.svg";
square.alt = "square icon";
headerContainer.appendChild(square);
//create the title text
let workTitle = document.createElement("h2");
workTitle.classList.add("header");
workTitle.classList.add("work");
let workTitleText = document.createTextNode("My Work Experience");
workTitle.appendChild(workTitleText);
headerContainer.appendChild(workTitle);
//append the header container to the work section
myWork.append(headerContainer);
experience.appendChild(myWork);

//create education container
const myEdu = document.createElement("div");
myEdu.classList.add("myEdu");
//create container for header icom and text
const eduHeader = document.createElement("div");
eduHeader.classList.add("header-container");
//create img for icon
const triangle = document.createElement("img");
triangle.classList.add("edu-icon");
triangle.src = "images/triangle.svg";
triangle.alt = "traingle icon";
eduHeader.appendChild(triangle);
//create the title text
let eduTitle = document.createElement("h2");
eduTitle.classList.add("header");
eduTitle.classList.add("education");
let eduTitleText = document.createTextNode("My Education");
eduTitle.appendChild(eduTitleText);
eduHeader.appendChild(eduTitle);
//append the header container to the work section
myEdu.appendChild(eduHeader);
experience.appendChild(myEdu);

//append job information to the work section
exp.forEach((work) => {
  console.log(work.title); //test
  //make the job container
  let job = document.createElement("div");
  job.classList.add("job");
  myWork.appendChild(job);

  //make the job content
  //Header
  if (work.title) {
    let header = document.createElement("h4");
    let name = document.createTextNode(work.title);
    header.classList.add("job-name");
    header.appendChild(name);
    job.appendChild(header);
  }

  //organization
  if (work.org) {
    let org = document.createElement("p");
    let orgText = document.createTextNode(work.org);
    org.appendChild(orgText);
    job.appendChild(org);
  }

  //Course
  if (work.course) {
    let myClass = document.createElement("p");
    let classText = document.createTextNode(work.course);
    myClass.appendChild(classText);
    job.appendChild(myClass);
  }

  //department
  if (work.department) {
    let dep = document.createElement("p");
    let depText = document.createTextNode(work.department);
    dep.appendChild(depText);
    job.appendChild(dep);
  }

  //date
  if (work.date) {
    let date = document.createElement("p");
    let dateText = document.createTextNode(work.date);
    date.appendChild(dateText);
    job.appendChild(date);
  }
});

//append education information for the edu section
edu.forEach((learn) => {
  console.log(learn.school); //test
  let degree = document.createElement("div");
  degree.classList.add("degree");
  myEdu.appendChild(degree);

  //header
  if (learn.school) {
    let header = document.createElement("h4");
    let name = document.createTextNode(learn.school);
    header.appendChild(name);
    degree.appendChild(header);
  }

  //organization
  if (learn.earned) {
    let cert = document.createElement("p");
    let certText = document.createTextNode(learn.earned);
    cert.appendChild(certText);
    degree.appendChild(cert);
  }

  //date
  if (learn.date) {
    let date = document.createElement("p");
    let dateText = document.createTextNode(learn.date);
    date.appendChild(dateText);
    degree.appendChild(date);
  }
});

//ALL the following JS code grabbed from codepen example:
//https://speckyboy.com/css-javascript-text-animation-snippets/
//will need to  cite
//look into animation libraries

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

//---------------------------------

// JAVASCRIPT FROM TUTORIAL FOR SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
