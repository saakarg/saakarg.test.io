"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var themeBtn = document.getElementById("theme_change");

function changeTheme(selector) {
  if (selector.checked) {
    document.body.dataset.theme = "dark";
  }

  if (!selector.checked) {
    document.body.dataset.theme = "light";
  }
}

themeBtn.addEventListener("click", function () {
  return changeTheme(themeBtn);
});
changeTheme(themeBtn); // A Comment

var lottieBtn = document.querySelector(".lottie-btn");
var lottieContainer = document.querySelector(".lottie_container");
var lottieItem = document.querySelector(".lottie_item");
lottieBtn.addEventListener("click", function () {
  lottieItem.play();
});
lottieItem.addEventListener("complete", function () {
  lottieItem.stop();
}); // Audio

var audioBtn = document.querySelector(".audio-btn");

var audios = _toConsumableArray(document.getElementsByClassName("audio")); // NOTE For Random Audio to play
// Random number is generated


var randomNum = Math.floor(Math.random() * audios.length),
    prevNum = randomNum;
console.log(randomNum, prevNum);

function playAudio() {
  if (audios[randomNum].paused) {
    randomNum = Math.floor(Math.random() * audios.length);
    prevNum = randomNum;
    audios[prevNum].currentTime = 0;
    audios[randomNum].play();
    audioBtn.textContent = "Pause";
  } else {
    audios[prevNum].pause();
    audioBtn.textContent = "Play";
  }
}

audioBtn.addEventListener("click", playAudio);