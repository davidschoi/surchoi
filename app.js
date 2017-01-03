'use strict';

$(document).ready(function() {
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
      scrollTop: ($($anchor.attr('href')).offset().top)
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
  });

  // Offset for main navigation
  $('#nav').affix({
    offset: {
      top: 100
    }
  });

  // Attending Input Radio Submit to Google Form
  var $inputAttending = $('input[name="entry.519471964"]');
  $inputAttending.val('yes');

  $('input[value="yes"]').click(function() {
    console.log('attending');
    $inputAttending.val('yes');
  });

  $('input[value="no"]').click(function() {
    console.log('not attending');
    $inputAttending.val('no');
  });

  // +1 condition display
  var plusOneArray = [
    "jasonchoi",
    "jenniferlee",
    "helenoh",
    "juliepak",
    "joshyoon","joshuayoon","eunicepark","euniceyoon",
    "derrickwu","margaretcho",
    "danielpark","gloriasong","gloriapark",
    "alexvareta","lysettevareta",
    "stephanietang","stephanievasquez","tonyvasquez",
    "cristeenkim","cristinelee","frankkim",
    "mikelthomas",
    "dianasearle",
    "eugeneeum","jenniferlee",
    "annasanders","annasanderslee","annalee","chenghoulee","cheng-houlee",
    "andykwon","andrewkwon","dianekwon","dianeluong","dianeluongkwon",
    "ericcho",
    "richardlee","hestialim","hestialee",
    "philjung","phillipjung","hannahjung","hannahsheen",
    "sophiecho","sophiekim","paulkim",
    "michellehong","michellekim","jonathankim","jonkim",
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

  // Validate Form Submit
  var $fields = $('#modal .form-control.required'),
      $submitButton = $('.modal-footer .btn-primary[type="submit"]'),
      $errorMessage = $('.modal-footer .error-message');

  $fields.bind("blur keyup change click", function() {
    var $emptyFields = $fields.filter(function() {
      return $.trim(this.value) === '';
    });

    $submitButton.attr('disabled', true);

    if (!$emptyFields.length) {
      $errorMessage.addClass('hidden');
      $submitButton.prop('disabled', false);
    } else {
      $submitButton.prop('disabled', true);
    }
  });

  $('.btn-submit-container').click(function() {
    $errorMessage.removeClass('hidden');
  });
});

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53415604-3', 'auto');
ga('send', 'pageview');