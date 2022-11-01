let counterValue = 0;

const valueUI = () => {
	valueEl.textContent = counterValue;
};

const decr = () => {
	counterValue -= 1;
	valueUI();
};

const incr = () => {
	counterValue += 1;
	valueUI();
};

const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrBtn.addEventListener("click", decr);
incrBtn.addEventListener("click", incr);
