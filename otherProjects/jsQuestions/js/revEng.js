$(document).ready(function() {

  //what is this
  var interval;

  //explain this function, what is the paramter
  function getRandomNumber(maxValue) {
    return Math.round(Math.random() * maxValue);
  }

  //explain this function
  function moveColors() {
    var rows = $(".row"); //what is this variable
    var numCols = $(".row").eq(0).find("div").length; //what is this variable
    var nextSquareColor; //what is this variable

    //explain this for loop
    for (var i = 0; i <= numCols; i++) {
      rows.each(function() {
        if (i < numCols) {
          nextSquareColor = $(this).find("div[class^='col']").eq(i + 1).css("background-color");
          $(this).find("div[class^='col']").eq(i).css("background-color", nextSquareColor);
        } else {
          $(this).find("div[class^='col']").eq(numCols - 1).css("background-color", "rgb(" + getRandomNumber(255) + "," + getRandomNumber(255) + "," + getRandomNumber(255) + ")");
        }
      })
    }

  }

  //explain this event
  $("#start").on("click", function() {
    if (!interval) {
      $(this).text("Stop");
      interval = setInterval(function() {
        moveColors();
      }, 250);
    } else {
      clearInterval(interval);
      interval = null;
      $(this).text("Start");
    }
  })

});
