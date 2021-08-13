'use strict'

// Selectors
const themeBtn = document.getElementById("theme_change");
const lottieBtn = document.querySelector(".lottie-btn");
const lottieContainer = document.querySelector(".lottie_container");
const lottieItem = document.querySelector(".lottie_item");
const audioBtn = document.querySelector(".audio-btn");
const audios = [...document.getElementsByClassName("audio")];

function changeTheme(selector) {
  if (selector.checked) {
    document.body.dataset.theme = "dark";
  }
  if (!selector.checked) {
    document.body.dataset.theme = "light";
  }
}

themeBtn.addEventListener("click", () => changeTheme(themeBtn));
changeTheme(themeBtn);

lottieBtn.addEventListener("click", () => lottieItem.play());
lottieItem.addEventListener("complete", () => lottieItem.stop());

// NOTE: For Random Audio to play
// Random number is generated
let randomNum = Math.floor(Math.random() * audios.length),
  prevNum = randomNum;

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
