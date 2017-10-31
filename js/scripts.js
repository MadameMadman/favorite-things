
$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var things = [$("#thing1").val(), $("#thing2").val(), $("#thing3").val(), $("#thing4").val(), $("#thing5").val()];

    var one = things[1];
    var three = things[3];
    var two = things[2];


    $(".unstyled").append("<li>" + one);
    $(".unstyled").append("<li>" + two);
    $(".unstyled").append("<li>" + three);




    console.log(things);
  });
});
