$(document).ready(function($) {
	$.ajax({
		url: 'a1.xml',
		type: 'GET',
		dataType: 'xml',
		success: handleResponse,
	});

	function handleResponse(xml){

		var n = 0

		$(xml).find("music").each(function(){
			$("#box"+n).html("<p class = 'songTitle'>" + $(this).find("title").text() + "</p>");
			$("#box"+n).append("<p class='artPic'><img src='_img/'" + $(this).find("artistPicture").text() + "width='100'</p>");
			$("#box"+n).append("<p class='artName'>" + $(this).find("artistName").text()"</p>");
		
			n++;
		});
	}
	
});