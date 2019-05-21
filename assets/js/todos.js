// Check Off Speific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("checked");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

// Press Enter to add new Todo from input
$("input[type='text']").keypress(function(e){
	if (e.which === 13) {
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + $(this).val() + "</li>");
		$(this).val(""); 
	}
});