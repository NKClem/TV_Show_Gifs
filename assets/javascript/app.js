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