'use strict';

// AJAX load components
$('#navContainer').load('templates/nav.html');
$('#mainContainer').load('partials/home.html', function() {
  // Resize home background to fill viewport
  var $headerContent = $('header .header-content');
  var windowHeight = $(window).height();
  if ($(window).height() > $headerContent.height()) {
    $headerContent.css({'height': windowHeight + 'px'});
    $('#carousel').css({'max-height': windowHeight + 'px'});
  }

  // jQuery Easing page scrolling
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav during scrolling
  $('body').scrollspy({
    target: '.navbar-fixed-top',
  })

  // Closes responsive menu on menu item click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // Closes modal on submit
  $('#modal [type="submit"]').on('click', function() {
    $('#modal .close').click();
  })

  // Fit text plugin for main header
  $('h1').fitText(
    1.2, {
      minFontSize: '50px',
      maxFontSize: '80px'
    }
  );
  $('h2').fitText(
    1.6, {
      minFontSize: '30px',
      maxFontSize: '45px'
    }
  );

  // Offset for main navigation
  $('#nav').affix({
    offset: {
      top: 100
    }
  });
});
$('#footerContainer').load('templates/footer.html');
$('#modalContainer').load('templates/modal.html');

$(document).ready(function() {
  // Attending Text
  var $buttonAttending = $('#modal .btn-success'),
      $buttonNotAttending = $('#modal .btn-danger'),
      $inputAttending = $('input[name="entry.519471964"]'),
      $textAttending = $('#modal .text-success'),
      $textNotAttending = $('#modal .text-danger'),
      $anchorChangeResponse = $('.change-response');

  $buttonAttending.click(function() {
    $buttonAttending.addClass('hidden');
    $buttonNotAttending.addClass('hidden');
    $textAttending.removeClass('hidden');
    $anchorChangeResponse.removeClass('hidden');
    $inputAttending.val('yes');
  });

  $buttonNotAttending.click(function() {
    $buttonNotAttending.addClass('hidden');
    $buttonAttending.addClass('hidden');
    $textNotAttending.removeClass('hidden');
    $anchorChangeResponse.removeClass('hidden');
    $inputAttending.val('no');
  });

  $anchorChangeResponse.click(function() {
    $buttonAttending.removeClass('hidden');
    $buttonNotAttending.removeClass('hidden');
    $textAttending.addClass('hidden');
    $anchorChangeResponse.addClass('hidden');
    $textNotAttending.addClass('hidden');
  });

  // +1 condition display
  var plusOneArray = [
    "jasonchoi",
    "jenniferlee",
    "helenoh",
    "juliepak",
    "joshyoon","eunicepark","euniceyoon",
    "derrickwu","margaretcho",
    "danielpark","gloriasong","gloriapark",
    "alexvareta","lysettevareta",
    "cristeenkim","cristinelee","frankkim",
    "mikelthomas",
    "dianasearle",
    "eugeneeum","jenniferlee",
    "annasanders","annasanderslee","annalee","chenghoulee","cheng-houlee",
    "andykwon","dianekwon","dianeluong","dianeluongkwon",
    "ericcho",
    "richardlee","hestialim","hestialee",
    "philjung","hannahjung","hannahsheen",
    "sophiecho","sophiekim","paulkim",
    "michellehong","michellekim","jonathankim",
    "richardpark","christineyun",
    "davidkim","tammykim"
  ];

  var $inputName = $('input[name="entry.140860861"]'),
      $inputPlusOneContainer = $('input[name="entry.1624099299"]').parents('.form-group');

  $inputName.keyup(function() {
    $inputPlusOneContainer.addClass('hidden');
    if($.inArray(this.value.toLowerCase().replace(' ', ''), plusOneArray) > -1) {
      $inputPlusOneContainer.removeClass('hidden');
    }
  });
});