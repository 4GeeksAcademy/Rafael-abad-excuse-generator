/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomNumber(maxRandomNumber) {
  return Math.floor(Math.random() * maxRandomNumber);
}

function randomExcuse() {
  const subjects = [
    "A random guy",
    "My friend",
    "A little bird",
    "The milkman",
    "My mother"
  ];
  const actions = ["ate", "stole", "destroyed", "hid", "threw away"];
  const objects = [
    "my homework",
    "my lunch",
    "my keys",
    "the TV remote",
    "the car keys"
  ];
  const conditions = [
    "last night",
    "this morning",
    "while I was sleeping",
    "during lunch",
    "when I wasn't looking"
  ];

  const randomSubject = subjects[randomNumber(subjects.length)];
  const randomAction = actions[randomNumber(actions.length)];
  const randomObject = objects[randomNumber(objects.length)];
  const randomCondition = conditions[randomNumber(conditions.length)];

  const excuse = `${randomSubject} ${randomAction} ${randomObject} ${randomCondition}.`;

  return excuse;
}

window.onload = function() {
  //write your code herefunction
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
