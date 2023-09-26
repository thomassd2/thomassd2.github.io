
import language from "./script_lang.js";
import {setLanguage} from "./script_lang.js";

window.setLanguage=setLanguage;

const header = document.createElement('template');
header.innerHTML = `
    <div class="topHead">
        <ul class="langButtonList">
            <li><a href="#" onclick="if(window.localStorage.getItem('language') != 'en'){window.location.reload()}; setLanguage('en');" class="langButton">english</button></a></li>
            <li> | </li>
            <li><a href="#" onclick="if(window.localStorage.getItem('language') != 'fr'){window.location.reload()};setLanguage('fr');" class="langButton">francais</button></a></li>
        </ul>
        <br>
        <h1><span class="auto-type"></span></h1>
        <a class="linkedinsub" href="https://www.linkedin.com/in/thomas-savage-duguay?originalSubdomain=ca" target="_blank"><i class="fa-brands fa-linkedin fa-2xs"></i></a>
        <ul class="navBarSec">
            <li><a href="home.html">${language.home}</a></li>
            <li><a href="education.html">education</a></li>
            <li><a href="experience.html">experience</a></li>
            <li><a href="personalProjects.html">${language.personalProjects}</a></li>
            <li><a href="aboutMe.html">${language.aboutMe}</a></li>
            <li><a href="ThomasSavage_CV.pdf" target="_blank">${language.resume}</a></li>
        </ul>
    </div>
`;
document.body.prepend(header.content);

var text = document.querySelectorAll(".lang");
var text_array = [...text];
text_array.forEach(block =>{
    block.innerText = language[block.id];
});

const Typed = window.Typed;

const word = document.querySelector("head title").innerText;
var livetype = new Typed('.auto-type',{
    strings: ["\""+word+"\""],
    typeSpeed: 40,
    startDelay: 300
});