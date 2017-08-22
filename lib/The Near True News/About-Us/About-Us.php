<!DOCTYPE html>
<html lang="en">
<head>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/themes/smoothness/jquery-ui.css" />
	<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"></script>
	<link type="text/css" rel="stylesheet" href="style.css"/>
	<script src="script.js" type="text/javascript"></script>
	<link rel="stylesheet" href="SlickNav/slicknav.css" />
	<script src="SlickNav/jquery.slicknav.min.js"></script>
	<title> About Us - The Near True News</title>
	<meta charset="UTF-8" />
	<meta name="keywords" content="Near True, New Trier Near True, New Trier Near True News, Satirical Newspaper, NT Satirical Newspaper, New Trier Satirical Newspaper, NT satirical, New Trier Satirical, NT satirical News, New Trier satirical news" />
	<meta name="author" content="William Armiros" />
	<meta name="description" content="New Trier's Satirical Newspaper." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!-- begin open graph metadata -->
	<meta property="og:title" content="All about The Near True News." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="http://theneartruenews.com/Images/Logo.png" />
	<meta property="og:url" content="http://theneartruenews.com" />
	<meta property="og:description" content="The satirical newspaper for New Trier and all the North Shore." />
	<!-- end open graph -->
</head>
<body>
<div id="body-wrapper">
	<div id="site-head">
		<header class="site-title">
			<a href="http://theneartruenews.com"><img src="Images/Near-True-Logo.png" alt="The Near True News" id="title" height="100px" width="200px"/></a>
			<p id="subtitle">Doing a Decent Job Since '12</p>
		</header>
		<nav id="info-navbar">
			<ul id="info">
				<li><a href="#">About Us</a></li>
				 •       
				<li><a href="http://theneartruenews.com/Contact/Contact.php">Contact</a></li> 
			</ul>
		</nav>
		<div id="all-social">
			<div id="social">
				<a href="https://www.facebook.com/Neartruenews"><img id="fb-img" src="Images/Facebook-icon.png" alt="Facebook" height="35px" width="35px"/></a>
				<img id="tw-img" src="Images/twitter-icon.png" alt="Twitter" height="35px" width="35px"/>
				<img id="yt-img" src="Images/YouTube-icon.png" alt="YouTube" height="35px" width="35px"/>
				<img id="in-img" src="Images/instagram-icon.png" alt="Instagram" height="35px" width="35px"/>
			</div>
			<div id="arrs">
				<div id="twitter-arr" class="disappear">&#9650;</div>
				<div id="youtube-arr" class="disappear">&#9650;</div>
				<div id="insta-arr" class="disappear">&#9650;</div>
			</div>
			<div id="social-captions">
				<!-- These are in sections for vertical centering -->
				<section id="twitter" class="disappear">
					<div class="vert-center">Don't care</div>
				</section>
				<section id="youtube" class="disappear">
					<div class="vert-center">Too lazy</div>
				</section>
				<section id="insta" class="disappear">
					<div class="vert-center">Don't even get me started...</div>
				</section>
			</div>
		</div>
	</div>
	<div class="site-separater no-padding"></div>
	<div class="main-nav">
		<div class="navigation">
			<nav>
				<a href="http://theneartruenews.com">Home</a> |
				<a href="/homepages/School.php">School</a> |
				<a href="/homepages/Sports.php">Sports</a> |
				<a href="/homepages/Social.php">Social</a> |
				<a href="/homepages/After-The-Academics.php">After the Academics</a>  
			</nav>
		</div>
		<div id="mobile-nav">
			<ul id="menu">
				<li><a href="http://theneartruenews.com">Home</a></li>
				<li><a href="/homepages/School.php">School</a></li>
				<li><a href="/homepages/Sports.php">Sports</a></li>
				<li><a href="/homepages/Social.php">Social</a></li>
				<li><a href="/homepages/After-The-Academics.php">After the Academics</a></li>
				<li><a href="/Contact/Contact.php">Contact</a></li>
				<li><a href="/About-Us/About-Us.php">About Us</a></li>
				<li><a href="https://www.facebook.com/Neartruenews">Follow Us</a></li>
				<li><a><div id="tfheader">
					<form id="tfnewsearch" action="/cgi-sys/entropysearch.cgi" target=searchwindow>
					<input class="tftextinput-mobile" type="text" name="query" value="">
					<input type="hidden" name="user" value="theneart">
					<input type="hidden" name="basehref" value="http://theneartruenews.com">
					<input type="hidden" name="template" value="default">
					<input class="tfbutton-mobile" type="submit" value="Search">
					</form>
				<div class="tfclear"></div>
				</div></a></li>
			</ul>
		</div>
		<script>
			$(function(){
				$('#menu').slicknav();
			});
		</script>
		<div class="search">
			<div id="tfheader">
				<form id="tfnewsearch" action="/cgi-sys/entropysearch.cgi" target=searchwindow>
				<input class="tftextinput" type="text" name="query" value="">
				<input type="hidden" name="user" value="theneart">
				<input type="hidden" name="basehref" value="http://theneartruenews.com">
				<input type="hidden" name="template" value="default">
				<input class="tfbutton" type="submit" value="Search">
				</form>
			<div class="tfclear"></div>
			</div>
		</div>
	</div>
	<div class="site-separater no-padding"></div>
	<div id="main-content">
		<div id="section-header">
			<h1>About Us</h1>
		</div>
		<div id="section-content">
			<p>The Near True News is a not-for-profit organization helping the needy residents of the North Shore procastinate and cut loose since the year of our lord 2012. We meet in room 377N on Wednesdays after school. If you can write well and are funny, that's good. If you can bring food, that's even better. If you can't make the meetings, you can send ideas and articles to anyone in the contact section.</p>
		</div>
		<div id="home">
			<a href="http://theneartruenews.com"><button>Return to Home</button></a>
		</div>
	<footer class="site-footer">
		<?php
		include 'footer.html';
		?>
	</footer>
</div>