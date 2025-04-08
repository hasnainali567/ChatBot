let send = document.getElementById("send");
let userMassage = document.getElementById("userMassage");
let chat = document.getElementById("chat");
let input_feild = document.getElementById("input-feild");

chat.scrollTop = chat.scrollHeight;

send.addEventListener("click", () => {
  
  userInput(botAnswer);
  
});

input_feild.addEventListener('keydown', (event)=> {
  if (event.keyCode === 13) {
    userInput(botAnswer);
  }
})


function userInput(botAnswer){
  let input_feild_Val = input_feild.value;
  let userInput = document.createElement("div");
  userInput.classList.add("massage", "right", "animate");
  let botOutput = document.createElement("div");
  botOutput.classList.add("massage");
  

  if (input_feild_Val !== '') {
    userInput.textContent = `${input_feild_Val}`;
    chat.appendChild(userInput);
    scrollToBottom();
    input_feild.value = "";
  }

  botAnswer(input_feild_Val, botOutput);

  botOutput.innerHTML = `<div class="loader"></div>`;chat.scrollTop = chat.scrollHeight;
  setTimeout(() => {
    chat.appendChild(botOutput);
    scrollToBottom();
  }, 1000);

}

function botAnswer(input_field_Val, botOutput) {
  input_field_Val = input_field_Val.toLowerCase(); // lowercase for easy match
  let bot_answer = "";

  if (
    input_field_Val.includes("hi") || input_field_Val.includes("hy") ||
    input_field_Val.includes("hey") || input_field_Val.includes("hyy") ||
    input_field_Val.includes("hello") || input_field_Val.includes("helo") ||
    input_field_Val.includes("hllo") || input_field_Val.includes("helloo")
  ) {
    bot_answer = "Hello! How are you?";
  }
  
  else if (
    input_field_Val.includes("admission") || input_field_Val.includes("admisn") ||
    input_field_Val.includes("addmission") || input_field_Val.includes("admision") ||
    input_field_Val.includes("apply") || input_field_Val.includes("form") ||
    input_field_Val.includes("online apply")
  ) {
    bot_answer = "Admission ke liye aapko Saylani ki website par online form bharna hoga.";
  }
  
  else if (
    input_field_Val.includes("course") || input_field_Val.includes("cors") ||
    input_field_Val.includes("kors") || input_field_Val.includes("courses") ||
    input_field_Val.includes("konsy courses") || input_field_Val.includes("available course")
  ) {
    bot_answer = "Saylani Web Dev, App Dev, Graphic Design, Python, etc. jaise courses offer karta hai.";
  }
  
  else if (
    input_field_Val.includes("fee") || input_field_Val.includes("fees") ||
    input_field_Val.includes("charges") || input_field_Val.includes("kitne paisay") ||
    input_field_Val.includes("kitni fees") || input_field_Val.includes("free") ||
    input_field_Val.includes("charges kya hain")
  ) {
    bot_answer = "Saylani ke tamam courses bilkul free hain. Koi bhi charges nahi hote.";
  }
  
  else if (
    input_field_Val.includes("location") || input_field_Val.includes("branch") ||
    input_field_Val.includes("campus") || input_field_Val.includes("centre") ||
    input_field_Val.includes("center") || input_field_Val.includes("kidhar") ||
    input_field_Val.includes("kahan") || input_field_Val.includes("address")
  ) {
    bot_answer = "Saylani ke multiple campuses hain — Karachi, Lahore, Islamabad, Hyderabad, etc.";
  }
  
  else if (
    input_field_Val.includes("last date") || input_field_Val.includes("deadline") ||
    input_field_Val.includes("apply date") || input_field_Val.includes("kab tak") ||
    input_field_Val.includes("closing date") || input_field_Val.includes("date")
  ) {
    bot_answer = "Admission ki last date 30 May 2025 hai. Jaldi apply karein.";
  }
  
  else if (
    input_field_Val.includes("certificate") || input_field_Val.includes("verify") ||
    input_field_Val.includes("certi") || input_field_Val.includes("verify certificate") ||
    input_field_Val.includes("cerificate") || input_field_Val.includes("certfct")
  ) {
    bot_answer = "Certificate verify karne ke liye Saylani ki website par visit karein.";
  }
  
  else if (
    input_field_Val.includes("job") || input_field_Val.includes("career") ||
    input_field_Val.includes("nokri") || input_field_Val.includes("kaam") ||
    input_field_Val.includes("jobs") || input_field_Val.includes("rozgar")
  ) {
    bot_answer = "Saylani aapko job placement aur CV making mein madad karta hai.";
  }
  
  else if (
    input_field_Val.includes("female") || input_field_Val.includes("ladki") ||
    input_field_Val.includes("girls") || input_field_Val.includes("aurat") ||
    input_field_Val.includes("ladies") || input_field_Val.includes("khawateen")
  ) {
    bot_answer = "Haan, females ke liye bhi full support aur separate batches available hain.";
  }
  
  else if (
    input_field_Val.includes("timing") || input_field_Val.includes("class time") ||
    input_field_Val.includes("din mein class") || input_field_Val.includes("time")
  ) {
    bot_answer = "Classes ka time course aur shift ke mutabiq vary karta hai. Website par timings mention hain.";
  } else if (
    input_field_Val.includes("result") || input_field_Val.includes("test result") ||
    input_field_Val.includes("result kab aye ga") || input_field_Val.includes("merit") ||
    input_field_Val.includes("result kb") || input_field_Val.includes("apitude test result")
  ) {
    bot_answer = "Result test ke 10 din baad Saylani ki website par upload kiya jata hai.";
  }
  
  else if (
    input_field_Val.includes("test") || input_field_Val.includes("aptitude") ||
    input_field_Val.includes("entry test") || input_field_Val.includes("test date") ||
    input_field_Val.includes("test kb hai") || input_field_Val.includes("test kab")
  ) {
    bot_answer = "Aptitude test online form submit karne ke kuch din baad hota hai. Website check karte rahen.";
  }
  
  else if (
    input_field_Val.includes("age") || input_field_Val.includes("limit") ||
    input_field_Val.includes("age restriction") || input_field_Val.includes("kitni age") ||
    input_field_Val.includes("minimum age") || input_field_Val.includes("maximum age")
  ) {
    bot_answer = "Minimum age requirement 14 years hai. Upper limit depend karta hai course pe.";
  }
  
  else if (
    input_field_Val.includes("mobile app") || input_field_Val.includes("application") ||
    input_field_Val.includes("saylani app") || input_field_Val.includes("mobile application") ||
    input_field_Val.includes("app link")
  ) {
    bot_answer = "Saylani ki official mobile app Play Store par available hai. Wahan se download karein.";
  }
  
  else if (
    input_field_Val.includes("web development") || input_field_Val.includes("web dev") ||
    input_field_Val.includes("frontend") || input_field_Val.includes("backend") ||
    input_field_Val.includes("html") || input_field_Val.includes("javascript")
  ) {
    bot_answer = "Web Development ka course HTML, CSS, JavaScript, and frameworks cover karta hai.";
  }
  
  else if (
    input_field_Val.includes("duration") || input_field_Val.includes("kitne month") ||
    input_field_Val.includes("kitne mahine") || input_field_Val.includes("kitna time lagta hai") ||
    input_field_Val.includes("course kitna lamba")
  ) {
    bot_answer = "Course duration aam tor par 6 se 12 months ka hota hai, depend karta hai course par.";
  }
  
  else if (
    input_field_Val.includes("online classes") || input_field_Val.includes("zoom") ||
    input_field_Val.includes("live class") || input_field_Val.includes("internet se") ||
    input_field_Val.includes("ghar baithe") || input_field_Val.includes("online learning")
  ) {
    bot_answer = "Saylani sirf on-campus physical classes offer karta hai. Online classes currently available nahi hain.";
  }
  
  else if (
    input_field_Val.includes("graphic design") || input_field_Val.includes("designing") ||
    input_field_Val.includes("photoshop") || input_field_Val.includes("illustrator") ||
    input_field_Val.includes("graphic course")
  ) {
    bot_answer = "Graphic Designing course mein Photoshop, Illustrator aur design principles sikhaye jate hain.";
  }
  
  else if (
    input_field_Val.includes("contact") || input_field_Val.includes("number") ||
    input_field_Val.includes("phone") || input_field_Val.includes("helpline") ||
    input_field_Val.includes("call") || input_field_Val.includes("whatsapp")
  ) {
    bot_answer = "Saylani ka contact number hai: 0311-1729526. Aap WhatsApp bhi kar sakte hain.";
  }

  else if (
    input_field_Val.includes("admission form") || input_field_Val.includes("apply") ||
    input_field_Val.includes("form kese fill karna") || input_field_Val.includes("form filling") ||
    input_field_Val.includes("apply kese karun")
  ) {
    bot_answer = "Admission form Saylani ki official website se fill karna hota hai. Required fields ko complete karein.";
  }
  
  else if (
    input_field_Val.includes("documents") || input_field_Val.includes("required papers") ||
    input_field_Val.includes("cnic") || input_field_Val.includes("bay form") ||
    input_field_Val.includes("document") || input_field_Val.includes("kya chahiye")
  ) {
    bot_answer = "CNIC ya bay form, passport size photo aur last qualification ki copy zaroori hoti hai.";
  }
  
  else if (
    input_field_Val.includes("timing") || input_field_Val.includes("class time") ||
    input_field_Val.includes("kitne baje class") || input_field_Val.includes("morning ya evening") ||
    input_field_Val.includes("schedule")
  ) {
    bot_answer = "Classes morning aur evening dono shifts mein hoti hain. Exact timing batch ID ke mutabiq hoti hai.";
  }
  
  else if (
    input_field_Val.includes("switch course") || input_field_Val.includes("change course") ||
    input_field_Val.includes("dusra course lena hai") || input_field_Val.includes("course change")
  ) {
    bot_answer = "Course switch karne ke liye aap ko admin se contact karna hoga within 2 weeks of admission.";
  }
  
  else if (
    input_field_Val.includes("certificate") || input_field_Val.includes("course complete") ||
    input_field_Val.includes("certificate milay ga") || input_field_Val.includes("completion")
  ) {
    bot_answer = "Course complete hone ke baad assessment pass karne par aapko certificate diya jata hai.";
  }
  
  else if (
    input_field_Val.includes("interview") || input_field_Val.includes("interview date") ||
    input_field_Val.includes("interview kab") || input_field_Val.includes("interview call")
  ) {
    bot_answer = "Interview aptitude test ke baad shortlisted students ko bulaya jata hai.";
  }
  
  else if (
    input_field_Val.includes("laptop") || input_field_Val.includes("device") ||
    input_field_Val.includes("apna laptop") || input_field_Val.includes("laptop zaroori") ||
    input_field_Val.includes("computer chahiye")
  ) {
    bot_answer = "Apna laptop hona zaroori hai for practice. Institute laptop provide nahi karta.";
  }
  
  else if (
    input_field_Val.includes("teacher") || input_field_Val.includes("sir ka name") ||
    input_field_Val.includes("kaun parhata") || input_field_Val.includes("trainer")
  ) {
    bot_answer = "Har course ka expert trainer hota hai. Batch assign hone ke baad aapko teacher ka naam pata chalega.";
  }
  
  else if (
    input_field_Val.includes("campus") || input_field_Val.includes("branch") ||
    input_field_Val.includes("location") || input_field_Val.includes("karachi") ||
    input_field_Val.includes("address")
  ) {
    bot_answer = "Saylani ke multiple campuses hain. Aapko nearest branch ka address form fill karte waqt milta hai.";
  }
  
  else if (
    input_field_Val.includes("attendance") || input_field_Val.includes("present") ||
    input_field_Val.includes("absent") || input_field_Val.includes("proxy") ||
    input_field_Val.includes("attendance rule")
  ) {
    bot_answer = "80% attendance zaroori hai. Zyada absents se aapka naam drop ho sakta hai.";
  }
  
  
  else {
    bot_answer = "Sorry, mujhe aapka sawal samajh nahi aaya. Kya aap thoda clear likh sakte hain?";
  }
  

  let index = 0;
  setTimeout(() => {
    botOutput.textContent = "";
    let interValid = setInterval(() => {
      if (index < bot_answer.length) {
        botOutput.textContent += bot_answer[index];
      } else {
        clearInterval(interValid);
      }
      index++; 
      scrollToBottom();
    }, 50);
   
  }, 2000);
}


function scrollToBottom() {
  chat.scrollTop = chat.scrollHeight;
}