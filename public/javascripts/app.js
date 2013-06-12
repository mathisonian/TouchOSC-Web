;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;


    // TODO: Add some custom javascript here if you want
    var socket = io.connect('http://localhost:3000');
    socket.on('/1/fader1', function (data) {
      console.log(data);
      $('#slider1').val(data[0]);
    });
    socket.on('/1/fader2', function (data) {
      console.log(data);
      $('#slider2').val(data[0]);
    });
    socket.on('/1/push1', function (data) {
      console.log(data);
      if(data[0] === 0) {
        $('#box1').removeClass("selected");
      } else {
        $('#box1').addClass("selected");
      }
    });
    socket.on('/1/push2', function (data) {
      console.log(data);
      if(data[0] === 0) {
        $('#box2').removeClass("selected");
      } else {
        $('#box2').addClass("selected");
      }
    });
    socket.on('/1/push3', function (data) {
      console.log(data);
      if(data[0] === 0) {
        $('#box3').removeClass("selected");
      } else {
        $('#box3').addClass("selected");
      }
    });
    socket.on('/1/push4', function (data) {
      console.log(data);
      if(data[0] === 0) {
        $('#box4').removeClass("selected");
      } else {
        $('#box4').addClass("selected");
      }
    });
    socket.on('/1/push5', function (data) {
      console.log(data);
      if(data[0] === 0) {
        $('#box5').removeClass("selected");
      } else {
        $('#box5').addClass("selected");
      }
    });
    socket.on('/1/push6', function (data) {
      console.log(data);
      if(data[0] === 0) {
        $('#box6').removeClass("selected");
      } else {
        $('#box6').addClass("selected");
      }
    });
    socket.on('/1/push7', function (data) {
      console.log(data);
      if(data[0] === 0) {
        $('#box7').removeClass("selected");
      } else {
        $('#box7').addClass("selected");
      }
    });
    socket.on('/1/push8', function (data) {
      console.log(data);
      if(data[0] === 0) {
        $('#box8').removeClass("selected");
      } else {
        $('#box8').addClass("selected");
      }
    });
    socket.on('/1/push9', function (data) {
      console.log(data);
      if(data[0] === 0) {
        $('#box9').removeClass("selected");
      } else {
        $('#box9').addClass("selected");
      }
    });
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);
