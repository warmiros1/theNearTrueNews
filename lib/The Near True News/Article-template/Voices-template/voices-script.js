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
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$(document).ready(function() {
 		$('.voices-text').removeClass("vert-center");
 		
 		/*var $Vheightone = $('#article .voices:nth-child(1) .voices-text').height();
 		var $vhone = $Vheightone / 2;
 		$('#article .voices:nth-child(1)').css("margin-bottom", $vhone+"px");
 		
 		var $Vheighttwo = $('#article .voices:nth-child(2) .voices-text').height();
 		var $vhtwo = $Vheighttwo / 2;
 		$('#article .voices:nth-child(2)').css("margin-bottom", $vhtwo+"px");
 		
		var $Vheightthree = $('#article .voices:nth-child(3) .voices-text').height();
		var $vhthree = $vheightthree / 2;
		$('#article .voices:nth-child(3)').css("margin-bottom", $vhthree+"px");
		
		var $Vheightfour = $('#article .voices:nth-child(4) .voices-text').height();
		var $vhfour = $Vheightfour / 2;
		$('#article .voices:nth-child(4)').css("margin-bottom", $vhfour+"px");*/
 	});
}