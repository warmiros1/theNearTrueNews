$(document).ready(function() {
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