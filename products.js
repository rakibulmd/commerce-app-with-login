function getElementById(inputId) {
	let innerText = document.getElementById(inputId);
	return innerText;
}

document
	.getElementById("item-container")
	.addEventListener("click", function (event) {
		event.target.parentNode.removeChild(event.target);
	});

let addItem = document.getElementsByClassName("add-item");

for (let item of addItem) {
	item.addEventListener("click", function (event) {
		let newItem = document.createElement("li");
		newItem.innerText = event.target.previousElementSibling.innerText;
		getElementById("item-container").appendChild(newItem);
	});
}

document
	.getElementById("input-add-item")
	.addEventListener("click", function () {
		if (
			getElementById("item-input").value.length > 2 &&
			getElementById("item-input").value.length < 15
		) {
			let newItem = document.createElement("li");
			newItem.innerText = getElementById("item-input").value;
			getElementById("item-container").appendChild(newItem);
			getElementById("item-input").value = "";
		} else if (getElementById("item-input").value.length >= 15) {
			getElementById("item-input").value = "Item name within 15 letters";
		} else {
			getElementById("item-input").value = "Input an item first";
		}
	});

document
	.getElementById("first-continue")
	.addEventListener("click", function () {
		getElementById("first-section").classList.add("hidden");
		getElementById("second-section").classList.remove("hidden");
	});

document.getElementById("loyalty").addEventListener("click", function () {
	getElementById("loyalty").style.backgroundColor = "skyblue";
	getElementById("loyalty").nextElementSibling.style.backgroundColor =
		"unset";
});
document.getElementById("regular").addEventListener("click", function () {
	getElementById("regular").style.backgroundColor = "skyblue";
	getElementById("regular").previousElementSibling.style.backgroundColor =
		"unset";
});
