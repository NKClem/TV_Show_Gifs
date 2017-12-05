$(document).ready(function() {
//array for buttons
var topics = ["dr. who", "blackish", "game of thrones", "the walking dead", "american housewife", "will & grace", "the voice", "the gifted", "designated survivor", "stranger things", "supernatural", "the last ship", "the x-files", "how i met your mother", "the gilmore girls", "saturday night live", "fresh off the boat", "the big bang theory", "young sheldon", "grey's anatomy"];

renderButtons();

$('.style-buttons').click(displayGif);

$('#add-show').click(function(event) {
	event.preventDefault();
	var newShow = $('#new-show').val().trim();
	topics.push(newShow);
	console.log(topics);
	renderButtons();
})



//function to create buttons
function renderButtons() {
	$('#buttons').empty();
	for (var i = 0; i < topics.length; i++) {
		var newButton = $('<button>');
		newButton.addClass('style-buttons');
		newButton.attr('data-name', topics[i]);
		newButton.text(topics[i]);
		$('#buttons').append(newButton);
	}
}



//call to giphy api
function displayGif() {
	$('#images-dump').empty();
	var userShow = $(this).attr('data-name');
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + userShow + '&api_key=oHeKCwJy4CsvUSGURAcAm8aGNCZiUGEj&limit=10';

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response) {
			console.log(response);
			var results = response.data;
			for(var i = 0; i < results.length; i++) {
				var gifDiv = $('<div>');
				var gifRating = $("<p>").text("Rating: " + results[i].rating);
				var gifImage = $('<img>');
				gifImage.attr('src', results[i].images.fixed_width_still.url);
				gifImage.attr('data-animate', results[i].images.fixed_width.url);
				gifImage.attr('data-still', results[i].images.fixed_width_still.url);
				gifImage.addClass('gif-image');
				gifDiv.addClass('image-spacing');
				gifDiv.append(gifRating);
            	gifDiv.append(gifImage);
            	$('#images-dump').append(gifDiv);
            
            	$('.gif-image').click(function() {
					var state = $(this).attr('data-state');
					var activeUrl = $(this).attr('data-animate');
    				var stillUrl = $(this).attr('data-still');
    				if (state == 'still') {
    					$(this).attr('src', activeUrl);
    					$(this).attr('data-state', 'animate');
    				} else {
    					$(this).attr('src', stillUrl);
    					$(this).attr('data-state', 'still');
    				}
				});
			}
		});

}


})



