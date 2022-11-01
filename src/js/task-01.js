const ref = document.querySelector("#categories");

const categoriesCount = ref.querySelectorAll("li.item");
console.log("Number of categories:", categoriesCount.length);

categoriesCount.forEach(category => {
	console.log("Category:", category.firstElementChild.textContent);
	console.log("Elements:", category.lastElementChild.children.length);
});
