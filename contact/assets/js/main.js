function postToGoogle() {
	alert('success');
	var name = $("#nameField").val();
	var email = $("#emailField").val();
	var mess = $("#messField").val();

	$.ajax({
		url: "https://docs.google.com/forms/d/e/1FAIpQLSeB5bi_fdazbbikDELKuWHoNdP-CrqT91ncghlc3NNnx9hq5w/formResponse?",
		data: {"entry.493418627": name, "emailAddress": email, "entry.864621645": mess},
		type: "POST",
		dataType: "jsonp",
		success: function(d)
	{},
		error: function(x, y, z) {
			$('#success-msg').show();
		}
	});

	return false;
}
