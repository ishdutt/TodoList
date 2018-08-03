$(".fa-plus").click(function(){
	$("#remo").slideToggle(60);
})

$("input").on("keypress", function(enter){
	if(enter.which===13)
	{
		var text=$(this).val();
		$(".container2").append("<div class='task'><span class='delete list'><i class='fas fa-trash-alt'></i></span>"+text+"<div>");
		$(this).val("");
	}
})
$(".even").on("click","div",function(event){
	$(this).toggleClass("complete");
	event.stopPropagation();
})
$(".container2").on("click","div",function(event){
	$(this).toggleClass("complete");
	event.stopPropagation();
})
$(".container2").on("click","span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
})