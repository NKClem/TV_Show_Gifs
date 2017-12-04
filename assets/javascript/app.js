//array for buttons
var topics = ["dr. who", "blackish", "game of thrones", "the walking dead", "american housewife", "will & grace", "the voice", "the gifted", "designated survivor", "quantico", "vikings", "the last ship", "monk", "how i met your mother", "gilmore girls", "saturday night live", "fresh off the boat", "the big bang theory", "young sheldon", "grey's anatomy"];

renderButtons();

//call to giphy api
$('.style-buttons').click(function() {
	var userShow = $(this).attr('data-name');
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + userShow + '&api_key=oHeKCwJy4CsvUSGURAcAm8aGNCZiUGEj&limit=10';

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response) {
			console.log(response);
			var results = response.data;
			for(i = 0; i < results.length; i++) {
				var displayGifDiv = $("<div class='item'>");
				var gifRating = results[i].rating;
				var gifRatingString = JSON.stringify(gifRating);
				var displayGifRating = $('<p>').text('Rating: ' + gifRatingString);
				var displayGif = $('<img>');
				displayGif.attr('src', results[i].images.fixed_height.url);
				displayGifDiv.prepend(displayGifRating);
            	displayGifDiv.prepend(displayGif);
            	$('#images-dump').prepend(displayGif);
			}
		});

})





$('#add-show').click(function() {
	event.preventDefault();
	var newShow = $('#new-show').val().trim();
	topics.push(newShow);
	console.log(topics);
	renderButtons();
})

function renderButtons() {
	$('#buttons').empty();
	topics.forEach(function(show) {
		var newButton = $('<button>');
		newButton.addClass('style-buttons');
		newButton.attr('data-name', show);
		newButton.text(show);
		$('#buttons').append(newButton);
	})
}

//$('.style-buttons').click(function(event) {
//	event.preventDefault();
//	var show = 
//})