var MangaImage = {
	handleImage : function () {
		$("img").load(function(){
// 				If load imgage ok, do nothing here
		}).error(function(){
//			var imgSrc = $(this).attr('src');
//			$(this).attr('src', imgSrc);
			$(this).remove();
		});
	}
};
$(document).ready(function() {
	MangaImage.handleImage();
});