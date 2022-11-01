const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
	inputEl.value.trim().length === 0 ? (outputEl.textContent = "Anonymous") : (outputEl.textContent = inputEl.value);
});
