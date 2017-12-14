$(document).ready(function() {
	$('.genrebox').on('change', function(){
		var selectedValue = this.options[this.selectedIndex].value;
		document.location.href= selectedValue;
	});
	
	$("#btnCancel").click(function() {
		window.history.back();
	});
});
