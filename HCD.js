$(document).ready(function () {

  var bandCamp = "http://herecomedots.bandcamp.com/";
  var faceBook = "https://www.facebook.com/herecomedots";
  var twitter = "https://twitter.com/AndHereComeDots";

  $('bc').click(function () {
    $(location).attr('href', bandCamp);
  });

    $('tw').click(function () {
    $(location).attr('href', faceBook);
  });

  $('tw').click(function () {
    $(location).attr('href', twitter);
  });
});
