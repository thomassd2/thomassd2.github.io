import language from "./script_lang.js";
import {setLanguage} from "./script_lang.js";

window.setLanguage=setLanguage;
const Typed = window.Typed;

const neededStrings = ["\"Thomas Savage-Duguay\"", language.header2,
"education","experience",language.personalProjects,language.aboutMe,language.resume,""]

function livetyper(stringArr,index) {
    if(index==9){
        return;
    }
    var livetype = new Typed('.auto-type'+index,{
        strings : [stringArr[index-1]],
        typeSpeed : 30,
        ...(index==1 && {startDelay:300}),
        onComplete: (self) => {
            if(index<3){
                setTimeout(()=>{
                    self.cursor.remove();
                    livetyper(stringArr,index+1);
                },300); 
            }
            else{
                document.querySelector('.auto-type'+index).style.color = "rgba(203,94,45,255)";
                if(index!=8){self.cursor.remove();}
                livetyper(stringArr,index+1);
            }
        }

    });
}

livetyper(neededStrings,1);