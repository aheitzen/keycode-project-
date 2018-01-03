var gradient = ['linear-gradient(#F84592, #9429E4)', 'linear-gradient(#14D2BC, #1783d6)', 'linear-gradient(#FE7105, #FE22C9)', 'linear-gradient(#9C4EDF, #505BC8)', 'linear-gradient(#1CAEAD, #2AD475)'];
var toggle = 1;
$(document).ready(function () {
	$(document).keypress(function(e) {
		$('#numberHolderDiv').text(e.which);
		$('#numberHolderDiv').css('background', gradient[toggle])
		if (toggle < gradient.length -1) {
			toggle++;
		} else {
			toggle = 0;
		}
	});
});



