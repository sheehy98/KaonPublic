$(document).ready(function(){
	
	$("[data-js-page]").on("touchend", function(){
		var goal_page = $(this).data("js-page");
		$(".page").removeClass("active");
		$(".options").removeClass("active");
		$(".options[data-page='"+goal_page+"']").addClass("active");
		$(".page[data-page='"+goal_page+"']").addClass("active");
	})
	
	$("[data-js-options]").on("touchend", function(){
		var goal_options = $(this).data("js-options");
		if ($("#optionPanel").hasClass("active")) {
			$("#optionPanel").removeClass("active");
		}
		else {
			$("#optionPanel").addClass("active");
		}
	})

})