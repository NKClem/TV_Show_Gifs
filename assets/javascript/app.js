//array for buttons
var topics = ["dr. who", "blackish", "game of thrones", "the walking dead", "american housewife", "will & grace", "the voice", "the gifted", "designated survivor", "stranger things", "parenthood", "the last ship", "the x-files", "how i met your mother", "gilmore girls", "saturday night live", "fresh off the boat", "the big bang theory", "young sheldon", "grey's anatomy"];

renderButtons();

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
			for(i = 0; i < results.length; i++) {
				var gifDiv = $('<div>');
				var gifRating = $("<p>").text("Rating: " + results[i].rating);
				var gifImage = $('<img>');
				gifImage.attr('src', results[i].images.fixed_height.url);
				gifImage.addClass('image-spacing');
				gifDiv.append(gifRating);
            	gifDiv.append(gifImage);
            	$('#images-dump').append(gifImage);
			}
		});

}

//click function to pause and restart gifs
//$('#')



$('#add-show').click(function() {
	event.preventDefault();
	var newShow = $('#new-show').val().trim();
	topics.push(newShow);
	console.log(topics);
	renderButtons();
})

$('.style-buttons').click(displayGif);

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