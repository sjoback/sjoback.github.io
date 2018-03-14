const ReallySmoothScroll = require('really-smooth-scroll');
// or
// import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();
// Done. Coundn't be easier.

// If you want to adjust the scrolling sensitivity (Optional)
ReallySmoothScroll.config({
  mousewheelSensitivity: 6, // Default
  keydownSensitivity: 6 // Default (When you press arrow down/up key)
});
