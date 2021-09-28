function postToGoogle() {
	alert('success');
	var name = $("#nameField").val();
	var email = $("#emailField").val();
	var mess = $("#messField").val();

	$.ajax({
		url: "https://docs.google.com/forms/d/e/1FAIpQLSdS6_aToly-sFjX5yOJ7ih-PoO_DffUorN2eiF_uf-U0qym3g/formResponse?",
		data: {"entry.1158309845": name, "emailAddress": email, "entry.211151452": mess},
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
