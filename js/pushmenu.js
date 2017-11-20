var mq = window.matchMedia( "(max-width: 570px)" );

if (mq.matches) {
   var main = function() {
      // Pushout open menu 2
     $('.readmore-button2').click(function() {
       $('.menu2').animate({
         left: "0px"
      }, 400);
       $('.overlay-back').fadeIn(400);

       $('#section2').animate({
         left: "400px"
      }, 400);
     });
     // Pushout open menu 3
     $('.readmore-button3').click(function() {
       $('.menu3').animate({
         left: "0px"
      }, 400);
       $('.overlay-back').fadeIn(400);

       $('#section3').animate({
         left: "400px"
      }, 400);
     });

     // Pushout close menu 2
     $('.button-close2').click(function() {
       $('.menu2').animate({
         left: "-400px"
      }, 400);
       $('.overlay-back').fadeOut(100);


       $('#section2').animate({
         left: "0px"
      }, 400);
     });
     // Pushout close menu 3
     $('.button-close3').click(function() {
       $('.menu3').animate({
         left: "-400px"
      }, 400);
       $('.overlay, .overlay-back').fadeOut(100);


       $('#section3').animate({
         left: "0px"
      }, 400);
     });
   };
}

else {
var main = function() {
   // Pushout open menu 2
  $('.readmore-button2').click(function() {
    $('.menu2').animate({
      left: "0px"
   }, 400);
    $('.overlay, .overlay-back').fadeIn(400);

    $('#section2').animate({
      left: "30%"
   }, 400);
  });
  // Pushout open menu 3
  $('.readmore-button3').click(function() {
    $('.menu3').animate({
      left: "0px"
   }, 400);
    $('.overlay-back').fadeIn(400);

    $('#section3').animate({
      left: "30%"
   }, 400);
  });

  // Pushout close menu 2
  $('.button-close2').click(function() {
    $('.menu2').animate({
      left: "-30%"
   }, 400);
    $('.overlay-back').fadeOut(100);


    $('#section2').animate({
      left: "0px"
   }, 400);
  });
  // Pushout close menu 3
  $('.button-close3').click(function() {
    $('.menu3').animate({
      left: "-30%"
   }, 400);
    $('.overlay, .overlay-back').fadeOut(100);


    $('#section3').animate({
      left: "0px"
   }, 400);
  });
};
}

$(document).ready(main);
