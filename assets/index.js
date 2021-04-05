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

const lottieBtn = document.querySelector(".lottie-btn");
const lottieContainer = document.querySelector(".lottie_container");
const lottieItem = document.querySelector(".lottie_item");

lottieBtn.addEventListener("click", () => {
	lottieItem.play();
});
lottieItem.addEventListener("complete", () => {
	lottieItem.stop();
});
