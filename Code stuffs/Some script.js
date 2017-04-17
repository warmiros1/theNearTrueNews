$(document).ready(function() {
   $('blockquote').remove();
	for (var i = 1; i < 50; i++) {
	    var bold = $('#main-content:nth-child(i)').text();
	    if ( bold === ' ' || bold === 'Untitled' ) {
	         $('b').remove();
	    }
    }
});