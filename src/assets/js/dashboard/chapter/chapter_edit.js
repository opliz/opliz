var ChapterEdit = {
	updateFollowingPageCheckBoxEvent : function () {
		$("#updateFollowingPage").change(function(){
			var checked = $("#updateFollowingPage").is(":checked");
			if(checked) {
				$("#btnSubmit").val("Next");
			} else {
				$("#btnSubmit").val("Save");
			}
		});
	},
};
$(document).ready(function() {
	ChapterEdit.updateFollowingPageCheckBoxEvent();
});
