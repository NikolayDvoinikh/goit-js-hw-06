function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const counter = document.querySelector("#controls > input");
const buttonCreate = document.querySelector("[data-create]");
const buttonCleaner = document.querySelector("[data-destroy]");

let width = 20;
let height = 20;

function createBox() {
	const divEl = document.createElement("div");
	divEl.classList.add("box");
	divEl.style.width = `${(width += 10)}px`;
	divEl.style.height = `${(height += 10)}px`;
	divEl.style.backgroundColor = getRandomHexColor();
	boxes.append(divEl);
	return divEl;
}

function createBoxes(amount) {
	amount = Number(counter.value);
	if (amount < 1 || amount > 100) {
		return alert("Введите значение от 1 до 100");
	}
	for (let i = 0; i < amount; i += 1) {
		createBox();
	}
}

buttonCreate.addEventListener("click", createBoxes);
buttonCleaner.addEventListener("click", () => {
	boxes.innerHTML = "";
	width = 20;
	height = 20;
});
