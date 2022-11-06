function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function createBoxes(amount) {}
// createBoxes();
const boxes = document.querySelector("#boxes");
const counter = document.querySelector("#controls > input");
const buttonCreate = document.querySelector("[data-create]");
const buttonCleaner = document.querySelector("[data-destroy]");

counter.addEventListener("input", () => );

function createBoxes(amount) {
	counter.value = amount;
	console.log(counter.value);
}
buttonCreate.addEventListener("click", createBoxes);

let width = 20;
let height = 20;
function createBox() {
	const divEl = document.createElement("div");
	divEl.classList.add("box");
	divEl.style.width = `${(width += 10)}px`;
	divEl.style.height = `${(height += 10)}px`;

	divEl.style.backgroundColor = getRandomHexColor();

	boxes.append(divEl);

	console.log(divEl);

	return divEl;
}

// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и
//нажимает кнопку Создать, после чего рендерится
//коллекция.При нажатии на кнопку Очистить, коллекция
//элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает
// один параметр - число.Функция создает столько < div >,
// сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше
// предыдущего на 10px.
// Все элементы должны иметь случайный цвет фона в
//формате HEX.Используй готовую функцию getRandomHexColor
// для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает
//содержимое div#boxes, тем самым удаляя все созданные
//элементы.
