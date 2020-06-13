const $pdf = $('.pdf');
const $imgDiv = $('.imgDiv');
const $resume = $('.btn-resume');
const $resumeDiv = $('#resume');

function toggleResume(event) {
	if (!$pdf.is(':visible')) {
		$imgDiv.hide(500);
		$pdf.show(300);
		$resume.html("<i class='eye slash icon'></i> Hide resume");
	} else {
		$pdf.hide(300);
		$imgDiv.show(250);
		$resume.html("<i class='eye icon'></i> Show resume");
	}
}

$(document).ready(function() {
	// Add smooth scrolling
	$($resume).on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				500
			);
		}
	});
});
