//array for buttons
var topics = ["dr. who", "blackish", "game of thrones", "the walking dead", "american housewife", "will & grace", "the voice", "the gifted", "designated survivor", "stranger things", "parenthood", "the last ship", "the x-files", "how i met your mother", "gilmore girls", "saturday night live", "fresh off the boat", "the big bang theory", "young sheldon", "grey's anatomy"];

renderButtons();

//call to giphy api
$('.style-buttons').click(function() {
	$('#images-dump').empty();
	var userShow = $(this).attr('data-name');
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + userShow + '&api_key=oHeKCwJy4CsvUSGURAcAm8aGNCZiUGEj&limit=10';

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response) {
			console.log(response);
			var results = response.data;
			for(i = 0; i < results.length; i++) {
				var displayGifDiv = $('<div>');
				
				var gifRating = results[i].rating;
				
				var displayGifRating = $('<p>').text('Rating: ' + gifRating);
				var displayGif = $('<img>');
				displayGif.attr('src', results[i].images.fixed_height.url);
				displayGif.addClass('image-spacing');
				displayGifDiv.append(displayGifRating);
            	displayGifDiv.append(displayGif);
            	$('#images-dump').append(displayGif);
			}
		});

})

//click function to pause and restart gifs
$('#')



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

function setUpGifs() {
	
}

//$('.style-buttons').click(function(event) {
//	event.preventDefault();
//	var show = 
//})