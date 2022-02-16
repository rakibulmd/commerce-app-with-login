function getValueByID(inputId) {
	return document.getElementById(inputId).value;
}
function getElementById(inputId) {
	let innerText = document.getElementById(inputId);
	return innerText;
}

document.getElementById("pin-generate").addEventListener("click", function () {
	getElementById("pin-show").innerText =
		1000 + Math.floor(Math.random() * 9000);
	getElementById("pin-show2").innerText =
		getElementById("pin-show").innerText;
	getElementById("pin-input").innerText = "";
});

let buttons = document.getElementsByClassName("input-button");

for (const button of buttons) {
	button.addEventListener("click", function (event) {
		if (
			getElementById("pin-input").innerText.length >= 0 &&
			getElementById("pin-input").innerText.length <= 3
		) {
			getElementById("pin-input").innerText += event.target.innerText;
		}
	});
}

document.getElementById("pin-submit").addEventListener("click", function () {
	if (getElementById("pin-show").innerText.length != 4) {
		getElementById("pin-input").innerText = "Please generate PIN first";
	} else {
		if (
			getElementById("pin-show").innerText ==
			getElementById("pin-input").innerText
		) {
			getElementById("first-section").classList.remove("hidden");
			getElementById("second-section").classList.add("hidden");
		} else {
			getElementById("pin-input").innerText = "Not matched! Try again.";
		}
	}
});

document.getElementById("clear-btn").addEventListener("click", function () {
	getElementById("pin-input").innerText = "";
});

document
	.getElementById("continue-to-products")
	.addEventListener("click", function () {
		window.location.href = "./products.html";
	});
