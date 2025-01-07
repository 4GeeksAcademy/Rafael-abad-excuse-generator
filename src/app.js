/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const subjects = [
  "A random guy",
  "My friend",
  "A little bird",
  "The milkman",
  "My mother"
];
const actions = ["stole", "ate", "broke", "headbutted", "threw away"];
const objects = ["my homework", "my food", "my keys", "the TV", "your car"];
const conditions = [
  "last night",
  "yesterday",
  "2 days ago",
  "during dinner",
  "while I wasn't looking"
];

function randomNumber(maxRandomNumber) {
  return Math.floor(Math.random() * maxRandomNumber);
}

function randomExcuse() {
  const randomSubject = subjects[randomNumber(subjects.length)];
  const randomAction = actions[randomNumber(actions.length)];
  const randomObject = objects[randomNumber(objects.length)];
  const randomCondition = conditions[randomNumber(conditions.length)];
  //another way to concatenate the strings
  //const excuse = `${randomSubject} ${randomAction} ${randomObject} ${randomCondition}.`;

  return (
    randomSubject +
    " " +
    randomAction +
    " " +
    randomObject +
    " " +
    randomCondition
  );
}

window.onload = function() {
  const excuseButtonElement = document.getElementById("excuse-button");
  if (excuseButtonElement) {
    excuseButtonElement.addEventListener("click", function() {
      const excuseMessage = document.getElementById("excuse-message");
      if (excuseMessage) {
        excuseMessage.innerHTML = randomExcuse();
      }
    });
  } else {
    console.log("Element with id 'excuse-message' not found.");
  }
};
