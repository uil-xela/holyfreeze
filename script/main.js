function keyHandler(e) {
	if (e.which == 13) {
		encodeUrl();
		e.preventDefault();
	}
}
			
function encodeUrl() {
	var url = document.getElementById("input_url");
	var output = document.getElementById("out");
	if (url.checkValidity()) {
		output.innerHTML = encodeURI(url.value);
	} else {
		output.innerHTML = url.validationMessage;
	}
}
