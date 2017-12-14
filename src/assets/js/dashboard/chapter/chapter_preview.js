var ChapterPreview = {
	selectAllChecked : function () {
		$("#selectAll").change(function(){
			var checked = $("#selectAll").is(":checked");
			if(checked) {
				$(".pageContents").prop('checked', true);
			} else {
				$(".pageContents").prop('checked', false);
			}
		});
	},
};
$(document).ready(function() {
	ChapterPreview.selectAllChecked();
});
