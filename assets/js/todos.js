//check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on the x to delete todo
$("ul").on("click", "li span", function(event){
  $(this).parent().fadeOut(800, function(){
    $(this).remove();
  });
  event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span>"+
    "<i class='far fa-trash-alt'></i>"+
    "</span> "+ todoText +"</li>");
  }
})

$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
})
