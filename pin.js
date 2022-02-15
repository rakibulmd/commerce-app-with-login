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
	getElementById("pin-input").innerText = "";
});

let buttons = document.getElementsByClassName("input-button");

for (const button of buttons) {
	button.addEventListener("click", function (event) {
		getElementById("pin-input").innerText += event.target.innerText;
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
		}
	}
});
