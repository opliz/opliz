$(document).ready(function() {
	$('.genrebox').on('change', function(){
		var selectedValue = this.options[this.selectedIndex].value;
		document.location.href= selectedValue;
	});
	
	$("#btnCancel").click(function() {
		window.history.back();
	});

	// var url = window.location.href;
	$("div.widget-content > ul#manga-type > li > a").each(function() {
		// var menuUrl = this.href;
		// var lastSlashMenuIndex = menuUrl.lastIndexOf("/");
		// var checkUrl = menuUrl.substring(0, lastSlashMenuIndex);
		// if(url.indexOf(checkUrl) !== -1) {
		//  $(this).closest("li").addClass("side-bar-active");
		// }
	  console.log("index");
	});
});
