//<![CDATA[
function labelthumbs(t){document.write('<ul class="lst_wrap">');for(var e=0;numposts>e;e++){var n,i=t.feed.entry[e],r=i.title.$t;if(e==t.feed.entry.length)break;for(var o=0;o<i.link.length;o++){if("replies"==i.link[o].rel&&"text/html"==i.link[o].type)var l=i.link[o].title,u=i.link[o].href;if("alternate"==i.link[o].rel){n=i.link[o].href;break}}var m;try{m=i.media$thumbnail.url}catch(f){s=i.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),m=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://2.bp.blogspot.com/_IKigl6y9hFA/TMdcT1jzo5I/AAAAAAAAAHA/hAKuT9rJpFU/noimage.jpg"}var h=i.published.$t,p=h.substring(0,4),g=h.substring(5,7),v=h.substring(8,10),w=new Array;if(w[1]="Jan",w[2]="Feb",w[3]="Mar",w[4]="Apr",w[5]="May",w[6]="Jun",w[7]="Jul",w[8]="Aug",w[9]="Sep",w[10]="Oct",w[11]="Nov",w[12]="Dec",document.write('<li class="clearfix">'),1==showpostthumbnails&&document.write('<a class="lst_thmba" title="'+r+'" href="'+n+'" target ="_top"><img alt="'+r+'" class="lst_thmb" src="'+m+'" title="'+r+'"/></a>'),document.write('<a class="lst_title" href="'+n+'" target ="_top">'+r+"</a><br/>"),"content"in i)var y=i.content.$t;else if("summary"in i)var y=i.summary.$t;else var y="";var x=/<\S[^>]*>/g;if(y=y.replace(x,""),1==showpostsummary)if(y.length<numchars)document.write(""),document.write(y),document.write("");else{document.write(""),y=y.substring(0,numchars);var k=y.lastIndexOf(" ");y=y.substring(0,k),document.write(y+"..."),document.write("")}var _="",A=0;document.write(""),1==showpostdate&&(_=_+'<abbr class="lst_date">'+w[parseInt(g,10)]+" "+v+" "+p+"</abbr>",A=1),1==showcommentnum&&(1==A&&(_+="<br/>"),"1 Comments"==l&&(l="1 Comment"),"0 Comments"==l&&(l="0 Comments"),l='<a class="lst_cmnts" href="'+u+'" target ="_top">'+l+"</a>",_+=l,A=1),1==displaymore&&(1==A&&(_+=""),_=_+'<a class="lst_rdmr" href="'+n+'" class="url" target ="_top">More »</a>',A=1),document.write(_),document.write('<span class="clear"></span></li>'),1==displayseparator&&e!=numposts-1&&document.write("")}document.write("</ul>")}function showLucky(t){for(var e=t.feed,a=(e.entry||[],e.entry[0]),n=0;n<a.link.length;++n)"alternate"==a.link[n].rel&&(window.location=a.link[n].href)}function fetchLuck(t){script=document.createElement("script"),script.src="/feeds/posts/summary?start-index="+t+"&max-results=1&alt=json-in-script&callback=showLucky",script.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(script)}function readLucky(t){var e=t.feed,a=parseInt(e.openSearch$totalResults.$t,10),n=Math.floor(Math.random()*a);n++,fetchLuck(n)}
function feelingLucky(){
	var page = Math.floor(Math.random() * 1000) + 1 ;
	var url = "/more/"+page;
	document.location.href= url;
}
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(){var e=a(this),s=r.settings;return isNaN(e.datetime)||(0==s.cutoff||Math.abs(i(e.datetime))<s.cutoff)&&t(this).text(n(e.datetime)),this}function a(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:r.datetime(e)});var a=t.trim(e.text());r.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(a.length>0)||r.isTime(e)&&e.attr("title")||e.attr("title",a)}return e.data("timeago")}function n(t){return r.inWords(i(t))}function i(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return n(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var r=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(e){function a(a,i){var r=t.isFunction(a)?a(i,e):a,s=n.numbers&&n.numbers[i]||i;return r.replace(/%d/i,s)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var n=this.settings.strings,i=n.prefixAgo,r=n.suffixAgo;if(this.settings.allowFuture&&0>e&&(i=n.prefixFromNow,r=n.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var s=Math.abs(e)/1e3,o=s/60,l=o/60,u=l/24,c=u/365,m=45>s&&a(n.seconds,Math.round(s))||90>s&&a(n.minute,1)||45>o&&a(n.minutes,Math.round(o))||90>o&&a(n.hour,1)||24>l&&a(n.hours,Math.round(l))||42>l&&a(n.day,1)||30>u&&a(n.days,Math.round(u))||45>u&&a(n.month,1)||365>u&&a(n.months,Math.round(u/30))||1.5>c&&a(n.year,1)||a(n.years,Math.round(c)),d=n.wordSeparator||"";return void 0===n.wordSeparator&&(d=" "),t.trim([i,m,r].join(d))},parse:function(e){var a=t.trim(e);return a=a.replace(/\.\d+/,""),a=a.replace(/-/,"/").replace(/-/,"/"),a=a.replace(/T/," ").replace(/Z/," UTC"),a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),a=a.replace(/([\+\-]\d\d)$/," $100"),new Date(a)},datetime:function(e){var a=t(e).attr(r.isTime(e)?"datetime":"title");return r.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var s={init:function(){var a=t.proxy(e,this);a();var n=r.settings;n.refreshMillis>0&&(this._timeagoInterval=setInterval(a,n.refreshMillis))},update:function(a){var n=r.parse(a);t(this).data("timeago",{datetime:n}),r.settings.localeTitle&&t(this).attr("title",n.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:r.parse(t(this).attr(r.isTime(this)?"datetime":"title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var a=t?s[t]:s.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),function(t,e,a){t.fn.tinyNav=function(n){var i=t.extend({active:"selected",header:"Menu",label:""},n);return this.each(function(){a++;var n=t(this),r="tinynav"+a,s=".l_"+r,o=t("<select/>").attr("id",r).addClass("tinynav "+r);if(n.is("ul,ol")){""!==i.header&&o.append(t("<option/>").text(i.header));var l="";n.addClass("l_"+r).find("a").each(function(){l+='<option value="'+t(this).attr("href")+'">';var e;for(e=0;e<t(this).parents("ul, ol").length-1;e++)l+="- ";l+=t(this).text()+"</option>"}),o.append(l),i.header||o.find(":eq("+t(s+" li").index(t(s+" li."+i.active))+")").attr("selected",!0),o.change(function(){e.location.href=t(this).val()}),t(s).after(o),i.label&&o.before(t("<label/>").attr("for",r).addClass("tinynav_label "+r+"_label").append(i.label))}})}}(jQuery,this,0),
$(function(){$("#fnav").tinyNav()}),
$(function(){
	// $('#truyen-tranh-menu').addClass('highlight');
	var t=window.location.href;

	$("nav a").each(function(){
		if(this.href==t) {
			$(this).addClass("active");
			$(this).parent('.secondary-menu').parent('.dropdown').parent('.multi-menu').find('.top-menu').addClass('highlight');
		}
	});

	var path = window.location.pathname;
	checkPath = path.substring(0, path.lastIndexOf('/'));
	checkPath = checkPath.substring(1);

	if(t.indexOf("more") !== -1) {
		$('#truyen-tranh-menu').addClass('highlight');
	} else {
		if(t.indexOf("trang-thai") >= 0) {
			$('#truyen-tranh-menu').addClass('highlight');
			$("a[href=\'" + checkPath + "\']").parent().addClass("active");
		} else {
			if(t.indexOf("the-loai") >=0 ) {
				$('#truyen-tranh-menu').addClass('highlight');
			} else {
				$('#truyen-tranh-menu').addClass('highlight');
			}
		}
	}

	});
//]]>