$(document).ready(function() {
//array for buttons
var topics = ["dr. who", "blackish", "game of thrones", "the walking dead", "30 rock", "3rd rock from the sun", "the voice", "the gifted", "designated survivor", "stranger things", "supernatural", "the last ship", "the x-files", "how i met your mother", "the gilmore girls", "saturday night live", "fresh off the boat", "the big bang theory", "young sheldon", "bob's burgers"];

//show original buttons
renderButtons();

//click function to display gifs, according to button
$(document).on('click', '.style-buttons', displayGifs);

//click function to animate and still gifs
$(document).on('click', '.gif-image', function() {
	var state = $(this).attr('data-state');
	var animateUrl = $(this).attr('data-animate');
    var stillUrl = $(this).attr('data-still');

	if (state === 'still') {
		$(this).attr('src', animateUrl);
		$(this).attr('data-state', 'animate');
	} else {
		$(this).attr('src', stillUrl);
		$(this).attr('data-state', 'still');
	}
});

//click function to create new buttons
$('#add-show').on('click', function(event) {
	event.preventDefault();
	var newShow = $('#new-show').val().trim();
	topics.push(newShow);
	renderButtons();
});

//function to create buttons from topics array
function renderButtons() {
	$('#buttons').empty();
	for (var i = 0; i < topics.length; i++) {
		var button = $('<button class="style-buttons">');
		button.attr('data-name', topics[i]);
		button.text(topics[i]);
		$('#buttons').append(button);
	}

}

//function for ajax call to giphy api
function displayGifs() {
	
	var show = $(this).attr('data-name');
	var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + show + '&api_key=oHeKCwJy4CsvUSGURAcAm8aGNCZiUGEj&limit=10';

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response) {
		console.log(response);
		$('#images-dump').empty();
		var results = response.data;
		for (var i = 0; i < results.length; i++) {
			var gifDiv = $('<div class="image-spacing">');
			var rating = results[i].rating;
			var displayRating = $('<p>').text('Rating: ' + rating);
				gifDiv.append(displayRating);
			var gifImage = $('<img class="gif-image">');
				gifImage.attr('src', results[i].images.fixed_height_still.url);
				gifImage.attr('data-animate', results[i].images.fixed_height.url);
				gifImage.attr('data-still', results[i].images.fixed_height_still.url);
				gifImage.attr('data-state', 'still');
				gifDiv.append(gifImage);
			$('#images-dump').append(gifDiv);
		} 
	});
}



});