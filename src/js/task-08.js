const refs = {
	form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("Все поля должны быть заполнены!");
	}

	const formData = {
		email: email.value,
		password: password.value,
	};

	console.log(formData);
	event.currentTarget.reset();
}
