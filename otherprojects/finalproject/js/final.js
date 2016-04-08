$(document).ready(function(){
	
	// Get all the nav li, add click event
	$(".nav").find("li").on("click",function(){
		// remove all active class
		$(".nav").find("li").removeClass("active");
		// add active class to clicked it. 
		$(this).addClass("active");
		var page = $(this).attr("id");
		console.log("page" +page);
		getPartial(page);
	
	});// closes the $(".nav").find("li").on("click",function()
	
	function getPartial(partial) {
		
		if (partial === "homePage"){
				$.get("partials/home.html", function(data){
					$("#pageContent").html(data);
					$("#myCarousel").carousel();
					
		});
		
		}else if (partial === "rentPage"){
					$.getJSON("jsonDatabase/final.json",function(data){
		console.dir(data);
	var html="";
	$.each(data, function(index, item){
	html += '<div class="col-md-4 cat">' +
	'<div class="gameName">' +item.name +'</div>'+
	'<div class="gameGenre">' +item.genre +'</div>' +
	'<div class="gameType">' +item.type +'</div>' +
	'<img class="gameImage" src="' +item.image + '"/>' +
	'<div class="panel panel-default">' +
	 '<div class="panel-heading">Information</div>';
	
	$.each(item.comments, function(ind, i){
		html+= '<div class="panel-body">' +
				'<div class="renterName">'+i.username + '</div>' +
				'<div class="renterLocation">'+i.comment + '</div>' +
				'<div class="renterStars">';
				//var numStars = Number(i.stars);
				for(var j=1;j<=5;j++){
					if(j <= i.stars){
					html+='<img src="images/fullStar.png"/>';
					}else{
					html+='<img src="images/emptyStar.png"/>';
				}
				}
				
				html+= '</div></div>';//end stars
				
	});//Each comment
	
	
	// do some stuff
	html += '</div>'+ //comment container
	 '</div>';	//col-md-4
	}); //each cat
	
	$("#pageContent").html(html);
	});

	// ORDER PAGE STARTS
		}else if (partial === "orderPage"){
			
			$.get("partials/order.html", function(data){
			$("#pageContent").html(data);
			
		//TAKE AN ORDER JS STYLING RIGHT HERE!!!!!
		$("#search").on("focus", function(){
		$("#log").append("<br>Search background-color");
		$(this).css("background-color", "blue");
	})
	
	.on("blur", function(){
		$("#log").append("<br>when box not selected, turn white");
		$(this).css("background-color", "#FFF");
	});
	
	$("#textBox").on("focus", function(){
		$("#log").append("<br>give message about their purchace");
		var val = $(this).val();
		$("#textBox").html(val +"Great Choice!");
	});
	
	
	$("#orderButton").mouseenter(function(){
		$(this).text("ORDER NOW!!");
		$("#log").append("<br> Button mouseenter");
	})
		.on("mouseleave",function(){
		$("#log").append("<br>Button mouseleave");
		$(this).text("Click Me!");
	});
	
	$("#myChoice").change(function(){
		var choice = $(this).val();
		$("#myChoiceMessage").html(choice +" whatever you want");
		$("#log").append("<br> User change selection");
	});
	
	$("#orderButton").click(function(){
		
		var mySearch = $("#search").val();
		var myTextbox = $("#textBox").val();
		var mySelect = $("#myChoice").val();
		var myGender = $("[name='gender']:checked").val();
		    
			var myCheckValues = [];
			//each is a jquery loop for objects/arrays
			// each thing is selcted, do function
			// "this" is the element we are currently looking at.
    $("[name='vehicle']:checked").each(function() {
        myCheckValues.push($(this).val());
    });
	
$("#log").append("<br>User Clicked the Button");
			
		$("#log").append("<br>Value of input is: "+mySearch);
		$("#log").append("<br>Value of textarea is: "+myTextbox);
		$("#log").append("<br>Value of select is: "+mySelect);
		$("#log").append("<br>Value of radio button is: "+myGender);
		$("#log").append("<br>Value of check values is: "+myCheckValues.join());
		
		
	}); 

		}); 
			
			}
	}
	// begin Program, get the homepage
	getPartial("homePage");
	


}); //closes document ready. 
