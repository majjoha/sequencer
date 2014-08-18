// SEQUENCER
function Sequencer(t) {
	var sequencer = null,
	tempo         = t, // Tempo in miliseconds for sequencer
	counter       = 0; // Starts the sequencer at step 0

    // START SEQUENCER
    $("#start").click(function() {
		if (sequencer !== null) return;
		sequencer = setInterval(function () {
			var max     = $("input[type='radio'][name='sequences']").size(); // Getting number of steps.
			var elem    = counter % max; // Modulo magic to make everything run continuously.
			var current = $("input[type='radio'][name='sequences']:eq("+elem+")"); // Pick current step.
			player      = $("#player")[0]; // Get the audio player.
			player.src  = current.attr("src"); // Retrieving and setting audio file to play.
			player.play(); // Play it!
			current.prop("checked", true); // Turn current step (or radio button if you will...) on in the sequencer
			counter++; // Move to next step, obviously.
		}, tempo); 
    });

    // STOP SEQUENCER
    $("#stop").click(function() {
      clearInterval(sequencer);
      sequencer = null;
    });

    // ADD NEW STEP TO SEQUNCER
    $("#add").click(function() {
    	var url = $("#audio_file").val(); // Get URL from input field
    	$('<input type="radio" name="sequences" src="' + url + '" disabled>').fadeIn('slow').appendTo('#sequencer'); // Append step to sequencer
    	return false;
    });
}