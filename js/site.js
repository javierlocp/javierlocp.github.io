$(document).ready(function() {

	// replace 'benbate' with your dribbble username
	$.jribbble.getShotsByPlayerId('brrrger', function (playerShots) {
		var html = [];
		$.each(playerShots.shots, function (i, shot) {
			html.push('<li><a target="_blank" href="' + shot.url + '">');
            html.push('<img src="' + shot.image_url + '" ');
            html.push('alt="' + shot.title + '"></a></li>');
		});
			
		$('#thumbnails ul').html(html.join(''));
	}, {page: 1, per_page: 9});


	$('a#about').click(function () {
		$('.popup,.overlay').fadeIn(600);
	});

	$('.overlay').click(function () {
		$('.popup,.overlay').fadeOut(600);
	});


}); 

