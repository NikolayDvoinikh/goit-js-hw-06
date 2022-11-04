const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onFontSizeChange = () => {
	textEl.style.fontSize = inputEl.value + "px";
};

inputEl.addEventListener("input", onFontSizeChange);
