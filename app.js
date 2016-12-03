'use strict';

// AJAX Load Components
$('#navContainer').load('templates/nav.html');
$('#mainContainer').load('partials/home.html');
$('#footerContainer').load('templates/footer.html');
$('#modalContainer').load('templates/modal.html');

$(function() {
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // Closes Modal on Submit
  $('#modal [type="submit"]').on('click', function() {
    $('#modal .close').click();
  })

  // Fit Text Plugin for Main Header
  $('h1').fitText(
    1.2, {
      minFontSize: '50px',
      maxFontSize: '80px'
    }
  );
  $('h2').fitText(
    1.6, {
      minFontSize: '25px',
      maxFontSize: '40px'
    }
  );

  // Offset for Main Navigation
  $('#nav').affix({
    offset: {
      top: 100
    }
  });

  // Resize home background to fill viewport
  var $headerContent = $('header .header-content');
  var windowHeight = $(window).height();
  if ($(window).height() > $headerContent.height()) {
    $headerContent.css({'height': windowHeight + 'px'});
  }
});