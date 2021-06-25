// $(document).ready(function () {
//displays date on page

var currentDay = moment().format("dddd, MMMM Do");

$("#currentDay").text(currentDay);

currentDay = moment().format("dddd, MMMM Do");

//on click of save btn
$(".saveBtn").on("click", function () {
  //get value in text area

  var text = $(this).siblings(".description").val();
  var key = $(this).parent().attr("id");

  console.log(text);

  //save in localstorage

  localStorage.setItem(key, text);
});

 function timeColor () {

    var currentHour = moment().hours();

    $(".time-block").each(function(){
        var hour = parseInt($(this).attr("id"))
        if(currentHour > hour) {
            $(this).addClass("past");

        }else if(currentHour === hour) {
            $(this).addClass("present");

        }else{
             $(this).addClass("future");
        }

    })

} 

timeColor(); {

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


}
