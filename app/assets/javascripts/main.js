$(function(){
	var active = true

	$('.middleleft').click(function(){
		if(active == true){
			$('.middleleft').css("width","25%");
			$('.left').css("width","75%");
			$('.middleright').css("width","0%");
			$('.right').css("width","0%");
			$('.icon').css("opacity","0");
			active = false;
		} else if (active == false) {
			$('.middleright').css("width","50%");
			$('.right').css("width","0%");
			$('.middleleft').css("width","50%");
			$('.left').css("width","0%");
			$('.icon').css("opacity","1");
			active = true;
		}
	});
	$('.middleright').click(function(){
		if(active == true) {
			console.log('runit')
			$('.middleright').css("width","25%");
			$('.right').css("width","75%");
			$('.middleleft').css("width","0%");
			$('.left').css("width","0%");
			$('.icon').css("opacity","0");
			active = false;
		} else if(active == false) {
			$('.middleright').css("width","50%");
			$('.right').css("width","0%");
			$('.middleleft').css("width","50%");
			$('.left').css("width","0%");
			$('.icon').css("opacity","1");
			active = true;
		}
	});
})