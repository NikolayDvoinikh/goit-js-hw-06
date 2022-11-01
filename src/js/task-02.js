const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItem = ingredients.forEach(ingredient => {
	const liTag = document.createElement("li");
	liTag.textContent = `${ingredient}`;
	liTag.classList.add("item");
	ingredientsList.append(liTag);
});
