$(document).ready(function() {
    $("#body").fadeIn(1100);
  });
  
  $("#link").click(function(){
    var href = $(this).attr("href");
    $("#body").fadeOut(900, function(){
      window.location = href;
    })
    return false;
  });