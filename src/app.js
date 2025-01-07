/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuse() {
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

  function randomNumber() {
    return Math.floor(Math.random() * 5);
  }

  const randomSubject = subjects[randomNumber()];
  const randomAction = actions[randomNumber()];
  const randomObject = objects[randomNumber()];
  const randomCondition = conditions[randomNumber()];

  const excuse = `${randomSubject} ${randomAction} ${randomObject} ${randomCondition}.`;

  return excuse;
}

window.onload = function() {
  //write your code herefunction
  const excuseElement = document.getElementById("excuse-message");
  if (excuseElement) {
    excuseElement.addEventListener("click", function() {
      console.log("Excuse message clicked!");
      // Add your custom logic here
    });
  } else {
    console.log("Element with id 'excuse-message' not found.");
  }
};
