//array for buttons
var topics = ['happy', 'sad', 'angry', 'joyful', 'annoyed', 'frustrated', 'excited', 'sleepy', 'crazy', 'depressed', 'silly', 'bored', 'brave', 'proud', 'foolish', 'lame', 'cheerful'];

renderButtons();

$('#add-feeling').click(function() {
	event.preventDefault();
	var newFeeling = $('#new-feeling').val().trim();
	topics.push(newFeeling);
	console.log(topics);
	renderButtons();
})

function renderButtons() {
	$('#buttons').empty();
	topics.forEach(function(feeling) {
		var newButton = $('<button>');
		newButton.addClass('style-buttons');
		newButton.attr('data-name', feeling);
		newButton.text(feeling);
		$('#buttons').append(newButton);
	})
}