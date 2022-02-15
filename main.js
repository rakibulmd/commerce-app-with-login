function getValueByID(inputId) {
	return document.getElementById(inputId).value;
}
function getElementById(inputId) {
	let innerText = document.getElementById(inputId);
	return innerText;
}

document.getElementById("input-email").addEventListener("keyup", function () {
	if (getValueByID("input-email").includes("@")) {
		console.log("valid email");
	}
	document.getElementById("login-btn").removeAttribute("disabled");
	if (document.getElementById("input-email").value == "") {
		document.getElementById("login-btn").setAttribute("disabled", true);
	}
});
document.getElementById("login-btn").addEventListener("click", function () {
	if (
		getValueByID("input-email") == "abc@gmail.com" &&
		getValueByID("input-password") == "abc"
	) {
		window.location.href = "./pin.html";
	} else {
		getElementById("login-error-message").innerText =
			"Email or password not matched!";
		console.log(error);
	}
});
