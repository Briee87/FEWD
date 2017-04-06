



$('.pax-1').parallax({imageSrc: 'http://placeimg.com/1600/1000/1'});

$('.pax-3').parallax({imageSrc: 'http://placeimg.com/1600/1000/2'});

$('.pax-4').parallax({imageSrc: 'http://placeimg.com/1600/1000/9'});


$("nav").find("a").click(function(e) {
   e.preventDefault();
   var section = $(this).attr("href");
   $("html, body").animate({
       scrollTop: $(section).offset().top
   });
});
