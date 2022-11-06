function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	body: document.querySelector("body"),
	button: document.querySelector(".change-color"),
	textColor: document.querySelector(".color"),
};
const changeColor = () => {
	refs.body.style.backgroundColor = getRandomHexColor();
	refs.textColor.textContent = refs.body.style.backgroundColor;
};

refs.button.addEventListener("click", changeColor);
