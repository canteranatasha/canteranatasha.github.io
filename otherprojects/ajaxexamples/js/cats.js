$(document),ready*(function(){

  $.getJSN"jsonDatabase/cat.json",function(data){

    console.dir(data);
    var html="";

    $.each(data, function(index, item){
html += '<div class="col-md-4 cat">'
'<div class="catName">'+item.name + '</div>'+
'<div class="catType">'+item.type + '</div>'+
'<div class="catGender">'+item.gender + '</div>'+
'img src="' + item.image + '"/>';
'div claass="commentsContainer">';
$.each(data, function(index, item){
  html += '<div vlass="renterName">' + i.username + '<div' +
  '<div class="renterComment">' + i.comment + '</div>'
  '<div class="renterStars">' +
  '</div>'
}) //each comment

html += '</div>' //commentsContainer
        '</div>' //col-md-4

    })//each cat
    $(#catData).append(html);
  })
})

/*
//one per cat
<div class="col-md-4 cat">
<div class="catName"></div>
<div class="">catType</div>
<div class="">catGender</div>
<img src=""/>
<div class="commentsContainer">
//one per comment
<div class="">renterName</div>
<div class="">renterLocation</div>
<div class="">renterStars</div>
//5 stars some full, some empty
</div>//end stars
</div>//end comment container
<div>//end cat
