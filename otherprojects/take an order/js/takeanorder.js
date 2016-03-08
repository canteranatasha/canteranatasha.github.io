$(document).ready(function(){

//$("#log").append("<br>added some text");
    
$("#myButton").on("click", function(){
    
    var myInput = $("#mySingleLineText").val();
    var myTextarea = $("#myTextarea").val();
    var mySelect = $("#mySelect").val();
    var myRadio = $("[name='gender']:checked").val();

$("#log").append("<br>User clicked the button");
$("#log").append("<br>Value of input is: "+myInput);
$("#log").append("<br>Value of textarea is: "+myTextarea);
$("#log").append("<br>Value of select is: "+mySelect);
$("#log").append("<br>Value of radio button is: "+myRadio);
    
    
})

});