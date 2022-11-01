const inputEl = document.querySelector("#validation-input");

const cheker = () => {
	inputEl.value.trim().length !== Number(inputEl.getAttribute("data-length"))
		? inputEl.classList.add("invalid") & inputEl.classList.remove("valid")
		: inputEl.classList.replace("invalid", "valid");
};

inputEl.addEventListener("blur", cheker);
