//array for buttons
var topics = ['blackish', 'game of thrones', 'the walking dead', 'american housewife', 'will & grace', 'the voice'];

renderButtons();

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