let send = document.getElementById("send");
let userMassage = document.getElementById("userMassage");
let chat = document.getElementById("chat");
let input_feild = document.getElementById("input-feild");

send.addEventListener("click", () => {
  let input_feild_Val = input_feild.value;
  let userInput = document.createElement("div");
  userInput.classList.add("massage", "right", "animate");
  let botOutput = document.createElement("div");
  botOutput.classList.add("massage");
  

  if (input_feild_Val !== '') {
    userInput.textContent = `${input_feild_Val}`;
    chat.appendChild(userInput);
    input_feild.value = "";
  }

  botAnswer(input_feild_Val, botOutput);

  botOutput.innerHTML = `<div class="loader"></div>`;
  setTimeout(() => {
    chat.appendChild(botOutput);
  }, 1000);

  
});


function botAnswer(input_feild_Val, botOutput) {
  if (input_feild_Val === "hi") {
    let botAnswer = `Hello! How are you?`;
    let index = 0;
    setTimeout(() => {
      botOutput.textContent = "";
      // botOutput.textContent = botAnswer;

      setInterval(() => {
        if (index < botAnswer.length) {
          botOutput.textContent += botAnswer[index];
        } else {
          return;
        }
        index++;
      }, 50);

      clearInterval();
    }, 2000);
  } else {
    let botAnswer = `I am not able to Understand.`;
    let index = 0;
    setTimeout(() => {
      botOutput.textContent = "";
      // botOutput.textContent = botAnswer;

      setInterval(() => {
        if (index < botAnswer.length) {
          botOutput.textContent += botAnswer[index];
        } else {
          return;
        }
        index++;
      }, 50);

      clearInterval();
    }, 2000);
  }
}