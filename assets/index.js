const themeBtn = document.getElementById("theme_change");

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

// A Comment

const lottieBtn = document.querySelector(".lottie-btn");
const lottieContainer = document.querySelector(".lottie_container");
const lottieItem = document.querySelector(".lottie_item");

lottieBtn.addEventListener("click", () => {
  lottieItem.play();
});
lottieItem.addEventListener("complete", () => {
  lottieItem.stop();
});

// Audio
const audioBtn = document.querySelector(".audio-btn");
const audios = [...document.getElementsByClassName("audio")];

// NOTE For Random Audio to play
// Random number is generated
let randomNum = Math.floor(Math.random() * audios.length),
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
