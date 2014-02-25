$(document).ready(function() {
    $('h').click(function(){
    	$(this).fadeOut('fast');
    });

	var bandCamp = "http://herecomedots.bandcamp.com/";  
	var faceBook = "https://www.facebook.com/herecomedots"; 
	var twitter = "https://twitter.com/AndHereComeDots";   
	var photos = "HCD_Photos.html";
	var shows = "UpcomingShows.html";

	$('p3').click(function (){
		$(location).attr('href',bandCamp);
	});

	$('p3').mouseover(function() {
		$(this).css('cursor', 'pointer');
	});
	
	$('p4').click(function (){
		$(location).attr('href',faceBook);
	});

	$('p4').mouseover(function() {
		$(this).css('cursor', 'pointer');
	});
	
	$('p5').click(function (){
		$(location).attr('href',twitter);
	});

	$('p5').mouseover(function() {
		$(this).css('cursor', 'pointer');
	});
	
	$('p2').click(function (){
		$(location).attr('href',photos);
	});

	$('p2').mouseover(function() {
		$(this).css('cursor', 'pointer');
	});
	
	$('p1').click(function (){
		$(location).attr('href',shows);
	});
	
	$('p1').mouseover(function() {
		$(this).css('cursor', 'pointer');
	});
});
