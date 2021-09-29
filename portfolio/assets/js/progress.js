// PHP PROGRESS BAR
// document.getElementById("circle").onload = function() {php()};
function php(){
   var count = $(('#php-text'));
   $({ Counter: 0 }).animate({ Counter: count.text() }, {
      duration: 2000,
      easing: 'linear',
      step: function () {
         count.text(Math.ceil(this.Counter)+ "%");
      }
   });

   var s = Snap('#php-animated');
   var progress = s.select('#php-progress');

   progress.attr({strokeDasharray: '0, 251.2'});
   Snap.animate(0,91.2, function( value ) {
      progress.attr({ 'stroke-dasharray':value+',251.2'});
   }, 2000);
}

// JAVASCRIPT PROGRESS BAR
var count = $(('#javascript-text'));
$({ Counter: 0 }).animate({ Counter: count.text() }, {
  duration: 2000,
  easing: 'linear',
  step: function () {
    count.text(Math.ceil(this.Counter)+ "%");
  }
});

var s = Snap('#javascript-animated');
var progress = s.select('#javascript-progress');

progress.attr({strokeDasharray: '0, 251.2'});
Snap.animate(0,51.2, function( value ) {
    progress.attr({ 'stroke-dasharray':value+',251.2'});
}, 2000);
//
// // CSS PROGRESS BAR
// var count = $(('#css'));
// $({ Counter: 0 }).animate({ Counter: count.text() }, {
//   duration: 2000,
//   easing: 'linear',
//   step: function () {
//     count.text(Math.ceil(this.Counter)+ "%");
//   }
// });
//
// var s = Snap('#css-animated');
// var progress = s.select('#css-progress');
//
// progress.attr({strokeDasharray: '0, 251.2'});
// Snap.animate(0,51.2, function( value ) {
//     progress.attr({ 'stroke-dasharray':value+',251.2'});
// }, 2000);
