$(document).ready(function() {

	var bandCamp = "http://herecomedots.bandcamp.com/";  
	var faceBook = "https://www.facebook.com/herecomedots"; 
	var twitter = "https://twitter.com/AndHereComeDots";   

	$('p1').click(function (){
		$(location).attr('href',bandCamp);
	});

		$('p1').mouseover(function() {
			$(this).css('cursor', 'pointer');
		});
	
	$('p2').click(function (){
		$(location).attr('href',faceBook);
	});

		$('p2').mouseover(function() {
			$(this).css('cursor', 'pointer');
		});
	
	$('p3').click(function (){
		$(location).attr('href',twitter);
	});
	
		$('p3').mouseover(function() {
			$(this).css('cursor', 'pointer');
		});
	
});
