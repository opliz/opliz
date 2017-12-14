$(document).ready(function() {
	$('#email-submit').click(function(){
		var email = $('#email').val();
		if(!isValidEmailAddress(email)) {
				$('#error').text("Vui lòng điền email chính xác.")
			} else {
					$('#contact-form').submit();
				}
	});
});
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	return pattern.test(emailAddress);
};