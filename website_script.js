const button = document.getElementById("startupButton");
const buttonImg = document.getElementById("buttonImg");
let clicked = true;
let clickedCorner = false;
let header = document.createElement("div");

function activateCorner(cornerActivated,cornerName, remainingCorners,btnNames, goBackLocation, activatedBtnDefault, activeFlags, cornerColor ) {
  clickedCorner = true;
  cornerActivated.style.fontSize = "43px";
  cornerActivated.style.color = cornerColor

  remainingCorners[0].style.color = "white";
  remainingCorners[1].style.color = "white";
  remainingCorners[2].style.color = "white";
  header.style.color = "white";
  header.querySelectorAll("span").forEach((span) => {
    span.style.color = "white";
  });

  setTimeout(() => {
    remainingCorners[0].style.display = "none";
    remainingCorners[1].style.display = "none";
    remainingCorners[2].style.display = "none";
    header.style.display = "none";
  },300);

  cornerActivated.style.margin = "5vh";
  let content = document.getElementById(cornerName);
  setTimeout(() => {
    content.style.display = "inline";
    setTimeout(() => {
      content.style.opacity = "100%";
      content.style.border = "3px solid #85858545";
      let timeline =document.getElementById(`${cornerName}timeline`);
      timeline.style.height = "450px";
    }, 50);
  }, 500);

  let btn1 = document.getElementById(btnNames[0]);
  let btn1Img = document.getElementById(btnNames[0] + "Img");
  setTimeout(() => {
    btn1.style.opacity = "100%";
  }, 1300);

  let btn2 = document.getElementById(btnNames[1]);
  let btn2Img = document.getElementById(btnNames[1] + "Img");
  setTimeout(() => {
    btn2.style.opacity = "100%";
  }, 1550);

  let btn3 = document.getElementById(btnNames[2]);
  let btn3Img = document.getElementById(btnNames[2] + "Img");
  setTimeout(() => {
    btn3.style.opacity = "100%";
  }, 1800);

  let content2 = document.getElementById(cornerName + "Content")
  setTimeout(() => {
    content2.style.opacity = "100%";
  }, 2000);

  let goBack = document.getElementById(`goBack${goBackLocation}`);
  goBack.style.display = "block";
  setTimeout(() => {
    goBack.style.opacity = "100%";
  }, 10);

  switch (activatedBtnDefault){
      case 1: if(activeFlags[0]){
          activate(btn1, btn1Img);
        }
      case 2: if(activeFlags[1]){
          activate(btn2, btn2Img);
        }
      case 3: if(activeFlags[2]){
          activate(btn3, btn3Img);
        }
  }
}

button.addEventListener("mouseover", function () {
  buttonImg.style.transition = "width 0.3s ease, filter 0.4s ease";
  buttonImg.style.width = "90px";
});

button.addEventListener("mouseout", function () {
  buttonImg.style.width = "80px";
});

button.addEventListener("mousedown", () => {
  button.style.border = '4px #a8a8a8 solid';
  button.style.backgroundColor = '#85858545';
  buttonImg.style.width = '85px';
  if(buttonImg.style.filter != "invert(96%) sepia(21%) saturate(3324%) hue-rotate(57deg) brightness(91%) contrast(88%)"){
    buttonImg.style.filter = "invert(73%) sepia(4%) saturate(1%) hue-rotate(312deg) brightness(93%) contrast(87%)";
  }
});

button.addEventListener("mouseup", () => {
  buttonImg.style.transition = 'width 0.3s ease'; 
  buttonImg.style.width = '90px';
  buttonImg.style.filter = "invert(96%) sepia(21%) saturate(3324%) hue-rotate(57deg) brightness(91%) contrast(88%)"
  button.style.backgroundColor = "white";

  if(clicked){
    setTimeout(() => {
      button.style.opacity = "0";
      setTimeout(() => {
        button.remove();
        header.id = "nameHeader"
        header.textContent = "Thomas Savage-Duguay";
        document.body.appendChild(header);
        setTimeout(() => {
          header.style.color = 'grey';
        }, 800);
        const sound = new Audio('assets/startup.mp3');
        sound.play();
        setTimeout(() => {
          const corners = document.querySelectorAll(".corner");
          corners.forEach(el =>{
            el.style.display = "inline";
            setTimeout(() => {
              el.style.color = 'grey';
            }, 400);
          });
        }, 2000);
      }, 1000);
    }, 1000);
  }
  clicked = false;
});

button.addEventListener("mouseleave", () => {
  if(buttonImg.style.filter != "invert(96%) sepia(21%) saturate(3324%) hue-rotate(57deg) brightness(91%) contrast(88%)"){
    buttonImg.style.width = "80px";
    button.style.backgroundColor = "white";
    buttonImg.style.filter = "invert(91%) sepia(2%) saturate(16%) hue-rotate(10deg) brightness(96%) contrast(100%)";
    button.style.border = "4px #85858545 solid";
  }
});
//////////
const education = document.getElementById("topLeft");
const projects = document.getElementById("topRight");
const experience = document.getElementById("bottomLeft");
const trip = document.getElementById("bottomRight");

//EDUCATION

education.addEventListener("mouseover", function () {
  education.style.fontSize = "43px";
  education.style.color = "#61bb46"
});

education.addEventListener("mouseout", function () {
  if (!clickedCorner) {
    education.style.fontSize = "40px";
    education.style.color = "grey";
  }
});

education.addEventListener("mousedown", () => {
  if(!clickedCorner){
    education.style.fontSize = "40px";
    education.style.color = "#4e9638";
  }
});

education.addEventListener("mouseleave", () => {
  if(!clickedCorner){
    education.style.fontSize = "40px";
    education.style.color = "grey";
  }
});

education.addEventListener("mouseup", () => {
  activateCorner(education, "edu", [experience, projects, trip], ["bdeb", "mcgill", "uq"], "UpRight", 2, [bdebActive, mcgillActive, uqActive], "#61bb46")
});

//PROJECTS

projects.addEventListener("mouseover", function () {
  if(!clickedCorner){
    projects.style.fontSize = "43px";
    projects.style.color = "#fdb827"
  }
});

projects.addEventListener("mouseout", function () {
  if(!clickedCorner){
    projects.style.fontSize = "40px";
    projects.style.color = "grey"
  }
});

projects.addEventListener("mouseup", () => {
  clickedCorner = true;
  projects.style.fontSize = "43px";
  projects.style.color = "#fdb827"

  education.style.color = "white";
  experience.style.color = "white";
  trip.style.color = "white";
  header.style.color = "white";
  header.querySelectorAll("span").forEach((span) => {
    span.style.color = "white";
  });

  setTimeout(() => {
    education.style.display = "none";
    experience.style.display = "none";
    trip.style.display = "none";
    header.style.display = "none";
  },300);

  projects.style.margin = "5vh";
  let content = document.getElementById("prj");
  setTimeout(() => {
    content.style.display = "inline";
    setTimeout(() => {
      content.style.opacity = "100%";
      content.style.border = "3px solid #85858545";
      let content2 = document.getElementById("prjContent")
      content2.style.opacity = "100%";
    }, 50);
  }, 500);

  let goBack = document.getElementById("goBackUpLeft");
  goBack.style.display = "block";
  setTimeout(() => {
    goBack.style.opacity = "100%";
  }, 10);

});

//EXPERIENCE

experience.addEventListener("mouseover", function () {
  if(!clickedCorner){
    experience.style.fontSize = "43px";
    experience.style.color = "#e03a3e"
  }
});

experience.addEventListener("mouseout", function () {
  if(!clickedCorner){
    experience.style.fontSize = "40px";
    experience.style.color = "grey"
  }
});

experience.addEventListener("mouseup", () => {
  activateCorner(experience, "exp", [education, projects, trip], ["centricity", "dassault", "dassault2"], "DownRight", 3, [centricityActive, dassaultActive, dassault2Active], "#e03a3e")
});

//TRIP

trip.addEventListener("mouseover", function () {
  if(!clickedCorner){
    trip.style.fontSize = "43px";
    trip.style.color = "#009ddc"
  }
});

trip.addEventListener("mouseout", function () {
  if(!clickedCorner){
    trip.style.fontSize = "40px";
    trip.style.color = "grey"
  }
});

trip.addEventListener("mouseup", () => {
  clickedCorner = true;
  trip.style.fontSize = "43px";
  trip.style.color = "#009ddc"

  education.style.color = "white";
  experience.style.color = "white";
  projects.style.color = "white";
  header.style.color = "white";
  header.querySelectorAll("span").forEach((span) => {
    span.style.color = "white";
  });

  setTimeout(() => {
    education.style.display = "none";
    experience.style.display = "none";
    projects.style.display = "none";
    header.style.display = "none";
  },300);

  trip.style.margin = "5vh";
  let content = document.getElementById("trip");
  setTimeout(() => {
    content.style.display = "inline";
    setTimeout(() => {
      content.style.opacity = "100%";
      content.style.border = "3px solid #85858545";
      let content2 = document.getElementById("tripContent")
      content2.style.opacity = "100%";
    }, 50);
  }, 500);

  let goBack = document.getElementById("goBackDownLeft");
  goBack.style.display = "block";
  setTimeout(() => {
    goBack.style.opacity = "100%";
  }, 10);

});

//EDUCATION TIMELINE BTNS

var bdebActive = false;
var mcgillActive = true;
var uqActive = false;

const bdebbtn = document.getElementById("bdeb");
const bdebImg = document.getElementById("bdebImg");

const mcgillbtn = document.getElementById("mcgill");
const mcgillImg = document.getElementById("mcgillImg");

const uqbtn = document.getElementById("uq");
const uqImg = document.getElementById("uqImg");

const content = document.getElementById("eduContent");

bdebbtn.addEventListener("mouseup", function (){
  if(!bdebActive){
    bdebActive = true;
    mcgillActive = false;
    uqActive = false;
    content.style.opacity = "0"
    setTimeout(() => {
      content.innerHTML = `
      <h1>
          Collège Bois-de-Boulogne
      </h1>
      <h2>Diploma of Collegiate Studies</h2>
      <h3>Montreal, Quebec, Canada</h3>
      <h3>Aug. 2020 - Jun. 2022</h3>
      <ul>
          <li>Diploma of Collegiate Studies in Natural Sciences</li>
          <li>Course Content: CEGEP Calculus 1 & 2; Linear Algebra; CEGEP Physics 1, 2 & 3; CEGEP Chemistry 1 & 2; Organic Chemistry; CEGEP Biology 1 & 2; Intro to Programming</li>
          <li>Activities and Societies: Member of the School Basketball Team</li>
          <img id="bdebBballPic" src = "assets/schools/bdebbball.jpg">
      </ul>
      `
      let h1Content = content.querySelector("h1");
      h1Content.style.color = "#ffcf25";
      content.style.opacity = "100%";
    }, 300);
    activate(bdebbtn, bdebImg);
    deactivate();
  }
});

mcgillbtn.addEventListener("mouseup", function (){
  if(!mcgillActive){
    bdebActive = false;
    mcgillActive = true;
    uqActive = false;
    content.style.opacity = "0"
    setTimeout(() => {
      content.innerHTML = `
                <h1>
                    McGill University
                </h1>
                <h2>Bachelor of Science, Computer Science</h2>
                <h3>Montreal, Quebec, Canada</h3>
                <h3>Aug. 2025 - Dec. 2025</h3>
                <ul>
                    <li>Major in Computer Science, Minor in Management</li>
                    <li>GPA: 3.84</li>
                    <li>
                        Courses taken:
                        <div id = coursesList>
                            <ul>
                                <li>COMP202 - Foundations of Programming</li>
                                <li>COMP250 - Intro to Computer Science</li>
                                <li>COMP206 - Intro to Software Systems</li>
                                <li>COMP273 - Intro to Computer Systems</li>
                                <li>COMP302 - Programming Lang & Paradigms</li>
                                <li>COMP307 - Principles of Web Development</li>
                                <li>COMP350 - Numerical Computing</li>
                                <li>COMP251 - Algorithms and Data Structures</li>
                                <li>COMP303 - Software Design</li>
                                <li>COMP310 - Operating Systems</li>
                                <li>COMP360 - Algorithm Design</li>
                                <li>COMP370 - Introduction to Data Science</li>
                                <li>COMP424 - Artificial Intelligence</li>

                                <li>MATH222 - Calculus 3</li>
                                <li>MATH223 - Linear Algebra</li>
                                <li>MATH240 - Discrete Structures</li>
                                <li>MATH323 - Probability</li>

                                <li>MGCR211 - Intro to Financial Accounting</li>
                                <li>MGCR341 - Introduction to Finance</li>
                                <li>MGCR331 - Information Technology Management</li>
                                <li>MGCR382 - International Business</li>
                            </ul>
                        </div>
                    </li>
                </ul>
      `
      let h1Content = content.querySelector("h1");
      h1Content.style.color = "#ed1b2f";
      content.style.opacity = "100%";
    }, 300);
    activate(mcgillbtn, mcgillImg);
    deactivate();
  }
});

uqbtn.addEventListener("mouseup", function (){
  if(!uqActive){
    bdebActive = false;
    mcgillActive = false;
    uqActive = true;
    content.style.opacity = "0"
    setTimeout(() => {
      content.innerHTML = `
                <h1>
                    The University of Queensland
                </h1>
                <h2>Bachelor of Science, Computer Science</h2>
                <h3>Brisbane, Queensland, Australia</h3>
                <h3>Feb. 2025 - Jun. 2025</h3>
                <ul>
                    <li>Exchange Semester </li>
                    <li>
                        Courses taken:
                        <div>
                            <ul>
                                <li>COMP3400 - Functional and Logic Programming</li>
                                <li>INFS1200 - Introduction to Information Systems (Databases and DBMS)</li>
                                <li>NEUR1020 - The Brain and Behavioural Sciences</li>
                            </ul>
                        </div>
                    </li>
                    <li>Activities and Societies: Queensland University Exchange Student Society</li>
                </ul>
      `
      let h1Content = content.querySelector("h1");
      h1Content.style.color = "#512c7b";
      content.style.opacity = "100%";
    }, 300);
    activate(uqbtn, uqImg);
    deactivate();
  }
});

function activate(btn, img){
  btn.style.width = "70px";
  btn.style.height = "70px";
  img.style.height = "40px";
}

function deactivate(){
  if(!bdebActive){
    bdebbtn.style.width = "50px";
    bdebbtn.style.height = "50px";
    bdebImg.style.height = "30px";
  }
  if(!mcgillActive){
    mcgillbtn.style.width = "50px";
    mcgillbtn.style.height = "50px";
    mcgillImg.style.height = "30px";
  }
  if(!uqActive){
    uqbtn.style.width = "50px";
    uqbtn.style.height = "50px";
    uqImg.style.height = "30px";
  }
}

const goBack = document.getElementById("goBackUpRight");
let educationContent = document.getElementById("edu");
goBack.addEventListener("mouseup", function (){
  if(education.style.display != "none"){
    educationContent.style.opacity = "0%";
    goBack.style.opacity = "0%";
    setTimeout(() => {
      educationContent.style.display = "none";
      goBack.style.display = "none";
    }, 300);
    setTimeout(() => {
      education.style.margin = "10vh";
      education.style.fontSize = "40px";
    }, 400);
    clickedCorner = false;
    setTimeout(() => {
      projects.style.display = "inline";
      experience.style.display = "inline";
      trip.style.display = "inline";
      header.style.display = "inline";
    }, 300);
    setTimeout(() => {
      education.style.color = "grey";
      projects.style.color = "grey";
      experience.style.color = "grey";
      trip.style.color = "grey";
      header.style.color = "grey";
      header.querySelectorAll("span").forEach((span) => {
        span.style.color = "grey";
      });
    }, 500);
  }
});

///////

//EXPERIENCE TIMELINE BTNS

var centricityActive = false;
var dassaultActive = false;
var dassault2Active = true;

const centricitybtn = document.getElementById("centricity");
const centricityImg = document.getElementById("centricityImg");

const dassaultbtn = document.getElementById("dassault");
const dassaultImg = document.getElementById("dassaultImg");

const dassault2btn = document.getElementById("dassault2");
const dassault2Img = document.getElementById("dassault2Img");

const content2 = document.getElementById("expContent");

dassault2btn.addEventListener("mouseup", function (){
  if(!dassault2Active){
    dassault2Active = true;
    dassaultActive = false;
    centricityActive = false;
    content2.style.opacity = "0"
    setTimeout(() => {
      content2.innerHTML = `
        <h1>
            Dassault Systèmes
        </h1>
        <h2>Software Engineer Intern</h2>
        <h3>Montreal, Quebec, Canada</h3>
        <h3>Jun. 2024 - Aug. 2024</h3>
        <ul>
            <li>Contributed to the development of the Ergonomic Workplace Design software as part of the Virtual Ergonomics R&D team.</li>
            <li>Redesigned the user action bar to enhance usability and ensure consistency with other Dassault Systèmes applications.</li>
            <li>Addressed user-reported issues by identifying and resolving bugs within the application.</li>
            <li>Attended Scrum meetings every two weeks and submitted regular progress reports.</li>
            <li><b>Technologies used</b>: C++, HTML, CSS, JavaScript</li>
        </ul>
      `
      let h1Content = content2.querySelector("h1");
      h1Content.style.color = "#085484";
      content2.style.opacity = "100%";
    }, 300);
    activate(dassault2btn, dassault2Img);
    deactivate2();
  }
});

dassaultbtn.addEventListener("mouseup", function (){
  if(!dassaultActive){
    dassaultActive = true;
    dassault2Active = false;
    centricityActive = false;
    content2.style.opacity = "0"
    setTimeout(() => {
      content2.innerHTML = `
        <h1>
            Dassault Systèmes
        </h1>
        <h2>Software Consultant Intern</h2>
        <h3>Montreal, Quebec, Canada</h3>
        <h3>May 2023 - Aug. 2023</h3>
        <ul>
            <li>Contributed to the development of a dashboard to support the workflows of an internal financial team.</li>
            <li>Implemented Scope of Work–based security for web widgets within the 3DEXPERIENCE platform.</li>
            <li>Developed Excel VBA macros to automate and streamline supervisor workflows.</li>
            <li><b>Technologies used</b>: HTML, CSS, JavaScript, Vue.js, Excel VBA</li>
        </ul>
      `
      let h1Content = content2.querySelector("h1");
      h1Content.style.color = "#085484";
      content2.style.opacity = "100%";
    }, 300);
    activate(dassaultbtn, dassaultImg);
    deactivate2();
  }
});

centricitybtn.addEventListener("mouseup", function (){
  if(!centricityActive){
    centricityActive = true;
    dassault2Active = false;
    dassaultActive = false;
    content2.style.opacity = "0"
    setTimeout(() => {
      content2.innerHTML = `
        <h1>
            Centricity Research
        </h1>
        <h2>Data Management Specialist</h2>
        <h3>Remote, Canada</h3>
        <h3>Nov. 2022 - Nov. 2024</h3>
        <ul>
            <li>Entered clinical research data in the appropriate databases.</li>
            <li>Resolved data queries to ensure consistency and compliance with study protocols.</li>
            <li>Assisted Clinical Research Coordinators (CRCs) and sponsors in reviewing and adjusting entered data.</li>
        </ul>
      `
      let h1Content = content2.querySelector("h1");
      h1Content.style.color = "#1cbab5";
      content2.style.opacity = "100%";
    }, 300);
    activate(centricitybtn, centricityImg);
    deactivate2();
  }
});

function deactivate2(){
  if(!dassault2Active){
    dassault2btn.style.width = "50px";
    dassault2btn.style.height = "50px";
    dassault2Img.style.height = "30px";
  }
  if(!dassaultActive){
    dassaultbtn.style.width = "50px";
    dassaultbtn.style.height = "50px";
    dassaultImg.style.height = "30px";
  }
  if(!centricityActive){
    centricitybtn.style.width = "50px";
    centricitybtn.style.height = "50px";
    centricityImg.style.height = "30px";
  }
}

//GOBACKBTN EXP

const goBack2 = document.getElementById("goBackDownRight");
let expContent = document.getElementById("exp");
goBack2.addEventListener("mouseup", function (){
  if(experience.style.display != "none"){
    expContent.style.opacity = "0%";
    goBack2.style.opacity = "0%";
    setTimeout(() => {
      expContent.style.display = "none";
      goBack2.style.display = "none";
    }, 300);
    setTimeout(() => {
      experience.style.margin = "10vh";
      experience.style.fontSize = "40px";
    }, 400);
    clickedCorner = false;
    setTimeout(() => {
      projects.style.display = "inline";
      education.style.display = "inline";
      trip.style.display = "inline";
      header.style.display = "inline";
    }, 300);
    setTimeout(() => {
      education.style.color = "grey";
      projects.style.color = "grey";
      experience.style.color = "grey";
      trip.style.color = "grey";
      header.style.color = "grey";
      header.querySelectorAll("span").forEach((span) => {
        span.style.color = "grey";
      });
    }, 500);
  }
});

//GOBACKBTN PRJ

const goBack3 = document.getElementById("goBackUpLeft");
let prjContent = document.getElementById("prj");
goBack3.addEventListener("mouseup", function (){
  if(projects.style.display != "none"){
    prjContent.style.opacity = "0%";
    goBack3.style.opacity = "0%";
    setTimeout(() => {
      prjContent.style.display = "none";
      goBack3.style.display = "none";
    }, 300);
    setTimeout(() => {
      projects.style.margin = "10vh";
      projects.style.fontSize = "40px";
    }, 400);
    clickedCorner = false;
    setTimeout(() => {
      experience.style.display = "inline";
      education.style.display = "inline";
      trip.style.display = "inline";
      header.style.display = "inline";
    }, 300);
    setTimeout(() => {
      education.style.color = "grey";
      projects.style.color = "grey";
      experience.style.color = "grey";
      trip.style.color = "grey";
      header.style.color = "grey";
      header.querySelectorAll("span").forEach((span) => {
        span.style.color = "grey";
      });
    }, 500);
  }
});

///TSD COLOR CHANGE FUNC

const colors = ["#61bb46", "#fdb827", "#f5821f", "#e03a3e", "#963d97", "#009ddc"];
header.addEventListener("click", async () => {
  const text = nameHeader.textContent;
  nameHeader.innerHTML = '';

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    nameHeader.appendChild(span);
  }

  const spans = nameHeader.querySelectorAll("span");

  for (let i = 0; i < spans.length; i++) {
    if(clickedCorner){
      break;
    }
    await delay(25);
    if(clickedCorner){
      break;
    }
    spans[i].style.color = colors[i % colors.length];
  }

  for (let i = 0; i < spans.length; i++) {
    if(clickedCorner){
      break;
    }
    await delay(25);
    spans[i].style.transition = "color 0.3s ease";
    if(clickedCorner){
      break;
    }
    spans[i].style.color = "grey";
  }
});

function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

//PROJECTS & SKILLS

let carouselImages = document.getElementById("carouselImages");
let images = document.querySelectorAll(".prjImg");
const imageWidth = 500; // same as .prjImg width in CSS
let imageIndex = 0;

function updateCarousel() {
  const offset = -imageIndex * imageWidth;
  carouselImages.style.transform = `translateX(${offset}px)`;
}

const curProjectContent = document.getElementById("curProjectContent");
let curProjectIndex = 0;
let projectContent = [
`<div id = projectText>
  <h2>
      Portfolio Website
  </h2>
  <h3>May 2023 - Present</h3>
  <ul>
      <li>The website you're on right now!</li>
      <li>Built using plain HTML, CSS, and JavaScript.</li>
      <li>Regularly updated to showcase my newly acquired skills and latest adventures.</li>
  </ul>
</div>
<div class="spacer"></div>
<div class ="carousel" id="carousel">
  <div id = "carouselImages">
      <img class = "prjImg" id ="img1" src="assets/projectsPics/PWebsite1.png">
      <img class = "prjImg" id ="img2" src="assets/projectsPics/PWebsite2.png">
      <img class = "prjImg" id ="img3" src="assets/projectsPics/PWebsite3.png">
  </div>
  <img id="leftArrow" src = "assets/goback.png" onclick="">
  <img id="rightArrow" src = "assets/goback.png">
</div>
`,
`<div id = projectText>
  <h2>
      SOCS Boards
  </h2>
  <h3>Nov. 2023 - Dec. 2023</h3>
  <ul>
      <li>Final Project for the course COMP307 - Principles of Web Development.</li>
      <li>Developed a Discord-style communication platform for the McGill School of Computer Science in a team of four students.</li>
      <li>Built the front-end using React and supporting libraries as part of a MERN stack (MongoDB, Express, React, Node.js).</li>
      <li>Achieved a grade of 98%; project later served as the foundation for an official McGill communication platform.</li>
  </ul>
</div>
<div class="spacer"></div>
<div class ="carousel" id="carousel">
  <div id = "carouselImages">
      <img class = "prjImg" id ="img1" src="assets/projectsPics/SOCSBOARD1.png">
      <img class = "prjImg" id ="img2" src="assets/projectsPics/SOCSBOARD2.png">
      <img class = "prjImg" id ="img3" src="assets/projectsPics/SOCSBOARD3.png">
      <img class = "prjImg" id ="img3" src="assets/projectsPics/SOCSBOARD4.png">
  </div>
  <img id="leftArrow" src = "assets/goback.png" onclick="">
  <img id="rightArrow" src = "assets/goback.png">
</div>
`,
`<div id = projectText>
  <h2>
      GymBro
  </h2>
  <h3>May 2024</h3>
  <ul>
      <li>Built a prototype iOS fitness app to learn the fundamentals of Swift.</li>
      <li>Used the ExerciseDB API to fetch exercises.</li>
      <li>Designed custom app icons using vector design software.</li>
      <li>More info <a href="https://github.com/thomassd2/GymBro/tree/main" target="_blank" >here</a>!</li>
  </ul>
</div>
<div class="spacer"></div>
<div class ="carousel" id="carousel">
  <div id = "carouselImages">
      <img class = "prjImg" id ="img1" src="assets/projectsPics/GymBro1.png">
      <img class = "prjImg" id ="img2" src="assets/projectsPics/GymBro2.png">
      <img class = "prjImg" id ="img3" src="assets/projectsPics/GymBro3.png">
  </div>
  <img id="leftArrow" src = "assets/goback.png" onclick="">
  <img id="rightArrow" src = "assets/goback.png">
</div>
`,
`<div id = projectText>
  <h2>
      BullsEye
  </h2>
  <h3>Nov. 2024</h3>
  <ul>
      <li>Project presented at the CodeJam 24' Hackathon.</li>
      <li>Built an AI chatbot designed to help users select and purchase the ideal car from an online dealership.</li>
      <li>Developed core features and algorithms in Python, and deployed the solution on Microsoft Azure.</li>
      <li>More info <a href="https://devpost.com/software/matador-ai-assistant" target="_blank" >here</a>!
  </ul>
</div>
<div class="spacer"></div>
<div class ="carousel" id="carousel">
  <div id = "carouselImages">
      <img class = "prjImg" id ="img1" src="assets/projectsPics/BullsEye1.png">
      <img class = "prjImg" id ="img2" src="assets/projectsPics/BullsEye2.png">
      <img class = "prjImg" id ="img3" src="assets/projectsPics/BullsEye3.png">
  </div>
  <img id="leftArrow" src = "assets/goback.png" onclick="">
  <img id="rightArrow" src = "assets/goback.png">
</div>
`,

]

document.getElementById("rightArrowProj").onclick = () => {
  curProjectIndex = (curProjectIndex + 1) % projectContent.length;
  updateProject();
};

document.getElementById("leftArrowProj").onclick = () => {
  curProjectIndex =(curProjectIndex - 1 + projectContent.length) % projectContent.length;
  updateProject();
};

function updateProject() {
  curProjectContent.style.opacity = "0";
  setTimeout(() => {
    curProjectContent.innerHTML = projectContent[curProjectIndex];
    curProjectContent.style.opacity = "100%";
    carouselImages = document.getElementById("carouselImages");
    images = document.querySelectorAll(".prjImg");
    imageIndex = 0;
  
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
  
    leftArrow.onclick = () => {
      imageIndex = (imageIndex - 1 + images.length) % images.length;
      updateCarousel();
    };
  
    rightArrow.onclick = () => {
      imageIndex = (imageIndex + 1) % images.length;
      updateCarousel();
    };
  },300);
}

document.getElementById("rightArrow").onclick = () => {
  imageIndex = (imageIndex + 1) % images.length;
  updateCarousel();
};

document.getElementById("leftArrow").onclick = () => {
  imageIndex = (imageIndex - 1 + images.length) % images.length; 
  updateCarousel();
};

//TRIP

const australiaButton = document.getElementById("australia");
const indonesiaButton = document.getElementById("indonesia");
const newZealandButton = document.getElementById("newZealand");
const vanuatuButton = document.getElementById("vanuatu");
const fijiButton = document.getElementById("fiji");

const australiaImage = document.getElementById("australiaImage");
const indonesiaImage = document.getElementById("indonesiaImage");
const newZealandImage = document.getElementById("newZealandImage");
const vanuatuImage = document.getElementById("vanuatuImage");
const fijiImage = document.getElementById("fijiImage");

let australiaActive = false
let indonesiaActive = false
let newZealandActive = false
let vanuatuActive = false
let fijiActive = false

function deactivateCountry(){
  if(!australiaActive){
    australiaButton.style.filter = "none"
    australiaImage.style.width = "200px";
  }

  if(!indonesiaActive){
    indonesiaButton.style.filter = "none"
    indonesiaImage.style.width = "200px";
  }
  if(!newZealandActive){
    newZealandButton.style.filter = "none"
    newZealandImage.style.width = "70px";
  }

  if(!vanuatuActive){
    vanuatuButton.style.filter = "none"
    vanuatuImage.style.width = "30px";
  }
  if(!fijiActive){
    fijiButton.style.filter = "none"
    fijiImage.style.width = "50px";
  }
}

australiaButton.onclick = () => {
  if(!australiaActive){
    indonesiaActive = false
    newZealandActive = false
    vanuatuActive = false
    fijiActive = false
    australiaActive = true;
    deactivateCountry();
    australiaButton.style.filter = "brightness(0) saturate(100%) invert(75%) sepia(12%) saturate(2702%) hue-rotate(348deg) brightness(104%) contrast(87%)";
    australiaImage.style.width = "210px";
    let curTripText = document.getElementById("curTripText");
    curTripText.style.opacity = "0";
    setTimeout(() => {
      curTripText.style.marginTop = "-85px";
      curTripText.innerHTML = 
      `
        <h1 class = "countryName" id = "australiaName"> Australia </h1>
        <div id = "curTripTextCarousel">
          <ul>
            <li>My time Down Under was simply unreal. I immediately fell for the laid-back, outdoors-oriented lifestyle, the unique wildlife, and landscapes straight out of a postcard. Swapping Quebec’s snowy streets for pristine, seemingly endless beaches was a dream come true.</li>
            <li>From January to July, Brisbane became my home away from home. Most days were spent hanging at South Bank, cruising the CityCat along the Brisbane River, or wandering UQ’s beautiful campus.</li>
            <li>Determined to make the most of being on the other side of the world, I covered a fair bit of the country, from Cairns and the Great Barrier Reef to Melbourne and the Great Ocean Road on the east coast, but Western Australia stole my heart. The beaches of Esperance, Margaret River, and Shark Bay were unlike anything I’d ever seen.</li>
            <li>Leaving such an incredible place was bittersweet, but I’m deeply grateful for the experience and excited for what’s next. A piece of me will always belong there, and I have a feeling I’ll be back in Oz sooner rather than later.</li>
          </ul>
          <div class ="carousel" id="carousel2">
            <div id = "carouselImages2">
                <img class = "tripImg" id ="img1" src="assets/australiaPics/aus1.jpg">
                <img class = "tripImg" id ="img2" src="assets/australiaPics/aus2.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus3.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus4.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus5.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus6.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus7.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus8.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus9.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus10.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus11.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus12.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus13.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus14.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus15.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus16.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus17.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus18.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus19.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus20.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus21.jpg">
                <img class = "tripImg" id ="img3" src="assets/australiaPics/aus22.jpg">
                
            </div>
            <img id="leftArrow2" src = "assets/goback.png" onclick="">
            <img id="rightArrow2" src = "assets/goback.png">
          </div>
        </div>
      `
      curTripText.style.opacity = "100%"

      let carouselImages2 = document.getElementById("carouselImages2");
      let images2 = document.querySelectorAll(".tripImg");
      const image2Width = 375; // same as .tripImg width in CSS
      let image2Index = 0;

      function updateCarousel2() {
        const offset = -image2Index * image2Width;
        carouselImages2.style.transform = `translateX(${offset}px)`;
      }

      document.getElementById("rightArrow2").onclick = () => {
        image2Index = (image2Index + 1) % images2.length;
        updateCarousel2();
      };

      document.getElementById("leftArrow2").onclick = () => {
        image2Index = (image2Index - 1 + images2.length) % images2.length; 
        updateCarousel2();
      };

      },300);
  }
}

indonesiaButton.onclick = () => {
  if(!indonesiaActive){
    australiaActive = false
    newZealandActive = false
    vanuatuActive = false
    fijiActive = false
    indonesiaActive = true;
    deactivateCountry();
    indonesiaButton.style.filter = "brightness(0) saturate(100%) invert(28%) sepia(38%) saturate(4621%) hue-rotate(339deg) brightness(91%) contrast(91%)";
    (document.getElementById("indonesiaImage")).style.width = "210px";
    let curTripText = document.getElementById("curTripText");
    curTripText.style.opacity = "0";
    setTimeout(() => {
      curTripText.style.marginTop = "-85px";
      curTripText.innerHTML = 
      `
        <h1 class = "countryName" id = "indonesiaName"> Bali, Indonesia </h1>
        <div id = "curTripTextCarousel">
          <ul>
            <li>When spring break rolled around, I dove deeper into the local vibe and headed to Aussies’ favorite tropical escape: Bali, Indonesia.</li>
            <li>While Bali isn’t the untapped hidden gem it once was, its beautiful beaches, incredible food, and rich culture still blew me away.</li>
            <li>Safe to say I now understand why it’s considered a digital nomad’s paradise.</li>
          </ul>
          <div class ="carousel" id="carousel2">
            <div id = "carouselImages2">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal1.jpg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal2.jpeg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal3.jpg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal4.jpeg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal5.jpeg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal6.jpg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal7.jpg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal8.jpg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal9.jpg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal10.jpeg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal11.jpg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal12.jpg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal13.jpg">
                <img class = "tripImg" id ="img1" src="assets/baliPics/bal14.jpg">
            </div>
            <img id="leftArrow2" src = "assets/goback.png" onclick="">
            <img id="rightArrow2" src = "assets/goback.png">
          </div>
        </div>
      `
      curTripText.style.opacity = "100%"

      let carouselImages2 = document.getElementById("carouselImages2");
      let images2 = document.querySelectorAll(".tripImg");
      const image2Width = 375; // same as .tripImg width in CSS
      let image2Index = 0;

      function updateCarousel2() {
        const offset = -image2Index * image2Width;
        carouselImages2.style.transform = `translateX(${offset}px)`;
      }

      document.getElementById("rightArrow2").onclick = () => {
        image2Index = (image2Index + 1) % images2.length;
        updateCarousel2();
      };

      document.getElementById("leftArrow2").onclick = () => {
        image2Index = (image2Index - 1 + images2.length) % images2.length; 
        updateCarousel2();
      };

      },300);
  }
}

newZealandButton.onclick = () => {
  if(!newZealandActive){
    australiaActive = false
    indonesiaActive = false
    vanuatuActive = false
    fijiActive = false
    newZealandActive = true;
    deactivateCountry();
    newZealandButton.style.filter = "brightness(0) saturate(100%) invert(51%) sepia(82%) saturate(4334%) hue-rotate(171deg) brightness(100%) contrast(101%)";
    newZealandImage.style.width = "75px";
    let curTripText = document.getElementById("curTripText");
    curTripText.style.opacity = "0";
    setTimeout(() => {
      curTripText.style.marginTop = "-85px";
      curTripText.innerHTML = 
      `
        <h1 class = "countryName" id = "newZealandName">New Zealand</h1>
        <div id = "curTripTextCarousel">
          <ul>
            <li>After settling in Brisbane, I made my way to New Zealand’s South Island for an epic road trip adventure.</li>
            <li>Aotearoa, as Kiwis call it, was nothing short of breathtaking. Travelling through Middle Earth-esque landscapes really felt like being in a movie.</li>
            <li>New Zealand unlocked the hiker in me, and I'm bound to make my way back to see what the North Island has to offer.</li>
          </ul>
          <div class ="carousel" id="carousel2">
            <div id = "carouselImages2">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz1.jpeg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz2.jpg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz3.jpg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz4.jpeg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz5.jpeg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz6.jpg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz7.jpg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz8.jpg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz9.jpg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz10.jpg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz11.jpg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz12.jpeg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz13.jpg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz14.jpeg">
                <img class = "tripImg" id ="img1" src="assets/nzPics/nz15.jpg">

            </div>
            <img id="leftArrow2" src = "assets/goback.png" onclick="">
            <img id="rightArrow2" src = "assets/goback.png">
          </div>
        </div>
      `
      curTripText.style.opacity = "100%"

      let carouselImages2 = document.getElementById("carouselImages2");
      let images2 = document.querySelectorAll(".tripImg");
      const image2Width = 375; // same as .tripImg width in CSS
      let image2Index = 0;

      function updateCarousel2() {
        const offset = -image2Index * image2Width;
        carouselImages2.style.transform = `translateX(${offset}px)`;
      }

      document.getElementById("rightArrow2").onclick = () => {
        image2Index = (image2Index + 1) % images2.length;
        updateCarousel2();
      };

      document.getElementById("leftArrow2").onclick = () => {
        image2Index = (image2Index - 1 + images2.length) % images2.length; 
        updateCarousel2();
      };

      },300);
  }
}

vanuatuButton.onclick = () => {
  if(!vanuatuActive){
    australiaActive = false
    indonesiaActive = false
    newZealandActive = false
    fijiActive = false
    vanuatuActive = true;
    deactivateCountry();
    vanuatuButton.style.filter = "brightness(0) saturate(100%) invert(33%) sepia(9%) saturate(6938%) hue-rotate(262deg) brightness(88%) contrast(91%)";
    vanuatuImage.style.width = "35px";
    let curTripText = document.getElementById("curTripText");
    curTripText.style.opacity = "0";
    setTimeout(() => {
      curTripText.style.marginTop = "-85px";
      curTripText.innerHTML = 
      `
        <h1 class = "countryName" id = "vanuatuName">Vanuatu</h1>
        <div id = "curTripTextCarousel">
          <ul>
            <li>Few people have heard of this tiny island nation in the South Pacific, myself included before this trip. When I saw cheap flights from Brisbane, I decided to take a chance and explore this uniquely captivating country.</li>
            <li>From hiking an active volcano on Tanna Island to swimming in the bluest water I’d ever seen on Espiritu Santo, Vanuatu was truly a hidden gem, if ever there was one.</li>
            <li>Immersing myself in a culture still relatively disconnected from the outside world was a much-needed breath of fresh air, and it reminded me how rewarding life can be when you keep things simple.</li>
          </ul>
          <div class ="carousel" id="carousel2">
            <div id = "carouselImages2">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van1.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van2.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van3.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van4.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van5.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van6.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van7.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van8.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van9.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van10.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van11.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van12.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van13.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van14.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van15.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van16.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van17.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van18.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van19.jpeg">
                <img class = "tripImg" id ="img1" src="assets/vanuatuPics/van20.jpeg">
            </div>
            <img id="leftArrow2" src = "assets/goback.png" onclick="">
            <img id="rightArrow2" src = "assets/goback.png">
          </div>
        </div>
      `
      curTripText.style.opacity = "100%"

      let carouselImages2 = document.getElementById("carouselImages2");
      let images2 = document.querySelectorAll(".tripImg");
      const image2Width = 375; // same as .tripImg width in CSS
      let image2Index = 0;

      function updateCarousel2() {
        const offset = -image2Index * image2Width;
        carouselImages2.style.transform = `translateX(${offset}px)`;
      }

      document.getElementById("rightArrow2").onclick = () => {
        image2Index = (image2Index + 1) % images2.length;
        updateCarousel2();
      };

      document.getElementById("leftArrow2").onclick = () => {
        image2Index = (image2Index - 1 + images2.length) % images2.length; 
        updateCarousel2();
      };

      },300);
  }
}

fijiButton.onclick = () => {
  if(!fijiActive){
    australiaActive = false
    indonesiaActive = false
    newZealandActive = false
    vanuatuActive = false
    fijiActive = true;
    deactivateCountry();
    fijiButton.style.filter = "brightness(0) saturate(100%) invert(72%) sepia(8%) saturate(3579%) hue-rotate(60deg) brightness(92%) contrast(74%)";
    fijiImage.style.width = "60px";
    let curTripText = document.getElementById("curTripText");
    curTripText.style.opacity = "0";
    setTimeout(() => {
      curTripText.style.marginTop = "-85px";
      curTripText.innerHTML = 
      `
        <h1 class = "countryName" id = "fijiName">Fiji</h1>
        <div id = "curTripTextCarousel">
          <ul>
            <li>As one last adventure before final exams, I flew to Fiji, a nation of more than 300 islands in the South Pacific.</li>
            <li>Fiji felt like paradise. The turquoise waters and the “island time” mentality made it the perfect place to unwind and, in my case, to catch up with family who flew in from home.</li>
          </ul>
          <div class ="carousel" id="carousel2">
            <div id = "carouselImages2">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji1.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji2.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji3.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji4.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji5.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji6.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji7.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji8.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji9.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji10.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji11.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji12.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji13.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji14.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji15.jpeg">
                <img class = "tripImg" id ="img1" src="assets/fijiPics/fiji16.jpeg">
                
            </div>
            <img id="leftArrow2" src = "assets/goback.png" onclick="">
            <img id="rightArrow2" src = "assets/goback.png">
          </div>
        </div>
      `
      curTripText.style.opacity = "100%"

      let carouselImages2 = document.getElementById("carouselImages2");
      let images2 = document.querySelectorAll(".tripImg");
      const image2Width = 375; // same as .tripImg width in CSS
      let image2Index = 0;

      function updateCarousel2() {
        const offset = -image2Index * image2Width;
        carouselImages2.style.transform = `translateX(${offset}px)`;
      }

      document.getElementById("rightArrow2").onclick = () => {
        image2Index = (image2Index + 1) % images2.length;
        updateCarousel2();
      };

      document.getElementById("leftArrow2").onclick = () => {
        image2Index = (image2Index - 1 + images2.length) % images2.length; 
        updateCarousel2();
      };

      },300);
  }
}

//goBack Button Trip

const goBack4 = document.getElementById("goBackDownLeft");
let tripContent = document.getElementById("trip");
goBack4.addEventListener("mouseup", function (){
  if(trip.style.display != "none"){
    tripContent.style.opacity = "0%";
    goBack4.style.opacity = "0%";
    setTimeout(() => {
      tripContent.style.display = "none";
      goBack4.style.display = "none";
    }, 300);
    setTimeout(() => {
      trip.style.margin = "10vh";
      trip.style.fontSize = "40px";
    }, 400);
    clickedCorner = false;
    setTimeout(() => {
      experience.style.display = "inline";
      education.style.display = "inline";
      projects.style.display = "inline";
      header.style.display = "inline";
    }, 300);
    setTimeout(() => {
      education.style.color = "grey";
      projects.style.color = "grey";
      experience.style.color = "grey";
      trip.style.color = "grey";
      header.style.color = "grey";
      header.querySelectorAll("span").forEach((span) => {
        span.style.color = "grey";
      });
    }, 500);
  }
});

















