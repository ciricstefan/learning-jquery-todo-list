// Check Off Speific Todos By Clicking
$("li").click(function(){
	$(this).toggleClass("checked");
});

// Click on X to delete Todo
$("span").click(function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

// Press Enter to add new Todo from input
$("input[type='text']").keypress(function(e){
	if (e.which === 13) {
		$("ul").append("<li>" + $(this).val() + "</li>");
	}
});