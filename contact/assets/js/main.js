function postToGoogle() {
	alert('success');
	var name = $("#nameField").val();
	var email = $("#emailField").val();
	var mess = $("#messField").val();

	$.ajax({
		url: "https://docs.google.com/forms/d/e/1FAIpQLSewuOZr0deyFAagCMWyTvZxJ8oWWwyQ-hXiuGyYe7zYCb9S8Q/formResponse?",
		data: {"entry.896447091": name, "emailAddress": email, "entry.1996542779": mess},
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
