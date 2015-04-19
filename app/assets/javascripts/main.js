$(function(){
	var active = true

	$('.middleleft').click(function(){
		if(active == true){
			$('.middleleft').css("width","25%");
			$('.left').css({
				"width":"75%",
				"visibility":"visible"
				});
			$('.middleright').css("width","0%");
			$('.right').css("width","0%");
			$('.icon').css("opacity","0");
			$('.miniiconleft').css("opacity","1");
			$('.miniicon').css("opacity","0");
			$('.shop').css("opacity","0");
			active = false;
		} else if (active == false) {
			$('.middleright').css("width","50%");
			$('.right').css("width","0%");
			$('.middleleft').css("width","50%");
			$('.left').css({
				"width":"0%",
				"visibility":"hidden"
				});
			$('.icon').css("opacity","1");
			$('.miniiconleft').css("opacity","0");
			$('.miniicon').css("opacity","1");
			$('.shop').css("opacity","1");
			active = true;
		}
	});
	$('.middleright').click(function(){
		if(active == true) {
			console.log('runit')
			$('.middleright').css("width","25%");
			$('.right').css({
				"width":"75%",
				"visibility":"visible"
				});
			$('.middleleft').css("width","0%");
			$('.left').css("width","0%");
			$('.icon').css("opacity","0");
			$('.miniiconright').css("opacity","1");
			$('.miniicon').css("opacity","0");
			$('.shop').css("opacity","0");
			active = false;
		} else if(active == false) {
			$('.middleright').css("width","50%");
			$('.right').css({
				"width":"0%",
				"visibility":"hidden"
				});
			$('.middleleft').css("width","50%");
			$('.left').css("width","0%");
			$('.icon').css("opacity","1");
			$('.miniiconright').css("opacity","0");
			$('.miniicon').css("opacity","1");
			$('.shop').css("opacity","1");
			active = true;
		}
	});
})