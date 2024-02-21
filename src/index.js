import _ from "lodash";
import "./style.css";

const answerWindow = document.getElementById("answer");
const text = document.getElementById("text");
const ball = document.getElementById("ball");

function showRandomText() {
  text.classList.add("hidden");

  const arrAnswers = ["Yes", "No", "Migh", "Forget", "Succeed", "Try"];
  text.textContent = "";
  ball.classList.add("animation");

  setTimeout(() => {
    const result = Math.floor(Math.random() * arrAnswers.length);
    text.textContent = arrAnswers[result];
    text.classList.remove("hidden");
    ball.classList.remove("animation");
  }, 1000);
}

answerWindow.addEventListener("click", showRandomText);
