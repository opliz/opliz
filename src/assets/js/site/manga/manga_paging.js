var Manga = {
	init : function () {
		var totalPages = $("#totalPages").val();
		$('#page-selection').bootpag({
			total: totalPages,
			page: 1,
			maxVisible: 5,
			leaps: true,
			firstLastUse: true,
			first: '←',
			last: '→',
			wrapClass: 'pagination',
			activeClass: 'active',
			disabledClass: 'disabled',
			nextClass: 'next',
			prevClass: 'prev',
			lastClass: 'last',
			firstClass: 'first'
		}).on("page", function(event, num){
			num = num -1;
			var result = '';
			var mangas = Manga.getMangasInPage(num);
			$.each(mangas, function(index, value){
				result += '<li class="clearfix" style="border-bottom: 1px solid #ddd;">';
				result += '<a class="lst_thmba" href="'+window.location.href + '/' + value.mangaUrl + '">';
				result += '<img alt="' + value.mangaName + '" src="' + value.mangaCoverImageUrl +'" width="60px" height="60px">';
				result += '</a>';
				result += '<a class="lst_title" href="' + window.location.href + '/' + value.mangaUrl + '">' + value.mangaName + '</a>';
				result += '<br>';
				result += '<abbr class="lst_date">Truyện: Abc Xyz</abbr>';
				result += '<span class="clear"></span>';
				result += '</li>';
			});
			$("#paging").html(result);
		});
	},
	getMangasInPage : function(page) {
		return DwrMangaService.getMangasInPage(page,{
			async: false,
			callback :function(result){
				console.log(result);
			}
		});
	},
};
$(document).ready(function() {
	Manga.init();
});
