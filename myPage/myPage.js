//Get resume data
const exp = [
  {
    title: "Graduate Teaching Assistant (GTA)",
    org: "Portland State University",
    department: "",
    date: "2022 - present",
  },
  {
    title: "Technical Course Support Specialist (TCSS)",
    org: "Portland State University",
    department: "CS161",
    date: "2019 - 2022",
  },

  {
    title: "Technical Course Support Specialist (TCSS)",
    org: "Portland State University",
    department: "CS162, CS163, CS302",
    date: "2019 - 2022",
  },

  {
    title: "President & Project Director",
    org: "Science Project",
    department: "Educational Non-profit",
    date: "2013 - 2018",
  },
];

const edu = [
  {
    school: "Portland State University",
    earned: "MS",
    date: "2018 - Present",
  },
  {
    school: "Portland Community College",
    earned: "",
    date: "2013-2015",
  },
  {
    school: "Portland State University",
    earned: "BA",
    date: "2008",
  },
];

let experience = document.querySelector("#experience");

const myWork = document.createElement("div");
myWork.classList.add("myWork");
let workTitle = document.createElement("h2");
workTitle.classList.add("header");
workTitle.classList.add("work");
let workTitleText = document.createTextNode("My Work Experience");
workTitle.appendChild(workTitleText);
myWork.appendChild(workTitle);
experience.appendChild(myWork);

const myEdu = document.createElement("div");
myEdu.classList.add("myEdu");
let eduTitle = document.createElement("h2");
eduTitle.classList.add("header");
eduTitle.classList.add("education");
let eduTitleText = document.createTextNode("My Education");
eduTitle.appendChild(eduTitleText);
myEdu.appendChild(eduTitle);
experience.appendChild(myEdu);

exp.forEach((work) => {
  console.log(work.title); //test
  //make the job container
  let job = document.createElement("div");
  job.classList.add("job");
  myWork.appendChild(job);

  //make the job content
  //Header
  if (work.title) {
    let header = document.createElement("h5");
    let name = document.createTextNode(work.title);
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

edu.forEach((learn) => {
  console.log(learn.school); //test
  let degree = document.createElement("div");
  degree.classList.add("degree");
  myEdu.appendChild(degree);

  //header
  if (learn.school) {
    let header = document.createElement("h5");
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
  // INJECT CSS
  // var css = document.createElement("style");
  // css.type = "text/css";
  // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  // document.body.appendChild(css);
};

//---------------------------------
