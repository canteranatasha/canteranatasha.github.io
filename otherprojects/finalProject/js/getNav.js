$.get("http://canteranatasha.github.io/myClonedFolder/otherProjects/finalProject/partials/nav.html", function(data){
     
$(document).ready(function() {
        
     $(".container").prepend(data);
     $(".container").fadeIn();
     }) 
})