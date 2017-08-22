$(document).ready(function() {
	$('#info-navbar li').mouseenter(function() {
	    $(this).fadeTo('fast', 1);
	});
	$('#info-navbar li').mouseleave(function() {
	    $(this).fadeTo('fast', 0.5); 
	});
	$('#social img').mouseenter(function() {
	    $(this).fadeTo('fast', 0.6);
	});
	$('#social img').mouseleave(function() {
	    $(this).fadeTo('fast', 1); 
	});
	$('#tw-img').mouseenter(function() {
	    $('#twitter').removeClass('disappear');
	    $('#twitter-arr').removeClass('disappear');
	});
	$('#tw-img').mouseleave(function() {
	    $('#twitter').addClass('disappear');
	    $('#twitter-arr').addClass('disappear');
	});
	$('#yt-img').mouseenter(function() {
	    $('#youtube').removeClass('disappear');
	    $('#youtube-arr').removeClass('disappear');
	});
	$('#yt-img').mouseleave(function() {
	    $('#youtube').addClass('disappear');
	    $('#youtube-arr').addClass('disappear'); 
	});
	$('#in-img').mouseenter(function() {
	    $('#insta').removeClass('disappear');
	    $('#insta-arr').removeClass('disappear');
	});
	$('#in-img').mouseleave(function() {
	    $('#insta').addClass('disappear');
	    $('#insta-arr').addClass('disappear'); 
	});
	$('.masterTooltip').hover(function(){
	    // Hover over code
	    var title = $(this).attr('title');
	    $(this).data('tipText', title).removeAttr('title');
	    $('<p class="tooltip"></p>')
	    .text(title)
	    .appendTo('#nt-news-advert')
	    .fadeIn('fast');
	}, function() {
	    // Hover out code
	    $(this).attr('title', $(this).data('tipText'));
	    $('.tooltip').remove();
    });
    var height = $('.prev-text').height();
    if (height > 18 ) {
    	$('.prev-text').css("padding-top", "0.3em");
    }
    else {
    	$('.prev-text').css("padding-top", "1em");
    }
});

var window_width = $(window).width();

if (window_width <= 1000) {
	$(document).ready(function() {
	$("#article-image").attr( "width", 280 );
	$("#article-image").attr( "height", function() {
		var width = 280;
		var str = $("#size").text();
		var pattern = /[0.0-9.9]+/g;
		var matches = str.match(pattern);
		var img_height = width * matches;
		return img_height;
		})
	});
}

else {
	$(document).ready(function() {
	$("#article-image").attr( "width", 552 );
	$("#article-image").attr( "height", function() {
		var width = 552;
		var str = $("#size").text();
		var pattern = /[0.0-9.9]+/g;
		var matches = str.match(pattern);
		var img_height = width * matches;
		return img_height;
		})
	});
} 
