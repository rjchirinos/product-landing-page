$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("blue");
  }
  else {
    $("nav").removeClass("blue");
  }
})
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        if ($("#menu").hasClass("show")) {
            $("#menu").removeClass("show");
        }
        else {
            $("#menu").addClass("show");
        }
    })
})