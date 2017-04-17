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
    	var $height = $('#slider1_container').height();
    	var $height1 = $('#slideshow-title').height();
    	$('#slideshow').css("max-height", $height + $height1);
    	var $height2 = $('#first-col').height();
    	$('#breaking').css("min-height", $height2);
});