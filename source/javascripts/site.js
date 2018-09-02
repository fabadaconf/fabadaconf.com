"use strict";

$(document).on('ready', function() {
  initParallax();
  initEvents();
  initSliders();
  initCollapseMenu();

  $(function() {
    $('.matchHeight').matchHeight();
  });

  $('.swipebox').swipebox();

  $('#daysCountDown').countdown($('#daysCountDown').data('date'), function(event) {
    var $this = $(this).html(event.strftime('' +
      '<span>%D <span>días</span></span>' +
      '<span class="divider">:</span>' +
      '<span>%H <span>horas</span></span>' +
      '<span class="divider">:</span>' +
      '<span>%M <span>mins</span></span>' +
      '<span class="divider">:</span>' +
      '<span>%S <span>segs</span></span>'));
  });

  $('#navbar, .menu-footer, #time').on('click', 'a', function(event) {
    event.preventDefault();
    var href = $.attr(this, 'href').split('#');

    $('html, body').animate({
      scrollTop: $('#' + href[1]).offset().top - 80
    }, 500);

    return false;
  });
});

$(window).on('scroll', function(event) {
  checkNavbar();
  checkCountUp();
}).scroll();

$(window).on('resize', function() {
  initParallax();
});

function initCollapseMenu() {
  var navbar = $('#navbar'),
    navbar_toggle = $('.navbar-toggle'),
    navbar_wrapper = $("#nav-wrapper");

  navbar.on('click', 'a', function(e) {
    navbar_toggle.toggleClass('collapsed');
    navbar.toggleClass('collapse');
  });

  navbar_wrapper.on('click', '.navbar-toggle', function(e) {
    navbar_toggle.toggleClass('collapsed');
    navbar.toggleClass('collapse');
  });

  navbar_wrapper.on('click', '.hasSub > a', function() {
    var el = $(this);

    el.next().toggleClass('show');
    el.parent().toggleClass('show');
    return false;
  });

  var lastWidth;
  $(window).on("resize", function() {
    var winWidth = $(window).width();

    if (winWidth > 992 && navbar_toggle.is(':hidden')) {
      navbar.addClass('collapse');
      navbar_toggle.addClass('collapsed');
    }

    lastWidth = winWidth;
  });
}

function initSliders() {
  var gallerySwiper = new Swiper('#gallery-slider', {
    direction: 'horizontal',

    slidesPerView: 4,
    slidesPerColumn: 2,

    speed: 1000,
    nextButton: '.arrow-right',
    prevButton: '.arrow-left',

    autoplay: 7000,
    autoplayDisableOnInteraction: false,
  });

  var sponsorsSwiper = new Swiper('#sponsors-slider', {
    direction: 'horizontal',

    slidesPerView: 5,

    speed: 1000,
    nextButton: '.arrow-right',
    prevButton: '.arrow-left',

    autoplay: 7000,
    autoplayDisableOnInteraction: false,
  });

  var speakersSwiper = new Swiper('#speakers-slider', {
    direction: 'horizontal',

    slidesPerView: 4,

    speed: 1000,
    nextButton: '.arrow-right',
    prevButton: '.arrow-left',

    autoplay: 7000,
    autoplayDisableOnInteraction: false,
  });

  var planSwiper = new Swiper('#plan-slider', {
    direction: 'horizontal',
    pagination: '.swiper-pages',
    paginationClickable: true,
    paginationBulletRender: function(swiper, index, className) {
      return '<span class="btn btn-blue btn-blue-border btn-sm ' + className + '">Día ' + (index + 1) + '</span>';
    }
  });

  $(window).on('resize', function() {
    var ww = $(window).width();

    if ($('#speakers-slider').length) {

      if (ww > 1000) {
        speakersSwiper.params.slidesPerView = 4;
      }
      if (ww <= 1000) {
        speakersSwiper.params.slidesPerView = 2;
      }
      if (ww <= 479) {
        speakersSwiper.params.slidesPerView = 1;
      }

      speakersSwiper.update();
    }

    if ($('#sponsors-slider').length) {
      if (ww > 1000) {
        sponsorsSwiper.params.slidesPerView = 5;
      }
      if (ww > 768 && ww <= 1000) {
        sponsorsSwiper.params.slidesPerView = 3;
      }
      if (ww > 480 && ww <= 767) {
        sponsorsSwiper.params.slidesPerView = 2;
      }
      if (ww <= 479) {
        sponsorsSwiper.params.slidesPerView = 1;
      }

      sponsorsSwiper.update();
    }

  }).resize();
}

function initEvents() {
  $('.block-tabs').on('click', '.item', function() {
    var parentDiv = $(this).closest(".block-tabs");

    parentDiv.find('.active').removeClass('active');
    parentDiv.find('.' + $(this).data('block')).addClass('active');
    $(this).addClass('active');

    return false;
  });

  $('footer').on('click', '.go-top', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
}

function initParallax() {
  if (/Mobi/.test(navigator.userAgent)) return false;

  $('.parallax').parallax("50%", 0.1);
}

function initScrollAnimation() {
  window.sr = ScrollReveal();

  var scrollZoomIn = {
    duration: 1000,
    scale: 0.1,
    mobile: false,
    afterReveal: function(domEl) {
      $(domEl).css('transition', 'all .3s ease');
    }
  };

  var scrollTextFade = {
    duration: 400,
    mobile: false,
    afterReveal: function(domEl) {
      $(domEl).css('transition', 'all .3s ease');
    }
  }

  var scrollFromLeft = {
    duration: 400,
    scale: 1,
    distance: '600px',
    origin: 'left',
    mobile: false,
    afterReveal: function(domEl) {
      $(domEl).css('transition', 'all .3s ease');
    }
  }

  var scrollFromLeft2 = {
    duration: 500,
    scale: 1,
    easing: 'linear',
    distance: '600px',
    origin: 'left',
    mobile: false,
    afterReveal: function(domEl) {
      $(domEl).css('transition', 'all .3s ease');
    }
  }

  var scrollFromTop = {
    duration: 500,
    scale: 1,
    easing: 'linear',
    distance: '600px',
    origin: 'top',
    mobile: false,
    afterReveal: function(domEl) {
      $(domEl).css('transition', 'all .3s ease');
    }
  }

  var scrollFromRight = {
    duration: 400,
    scale: 1,
    distance: '600px',
    origin: 'right',
    mobile: false,
    afterReveal: function(domEl) {
      $(domEl).css('transition', 'all .3s ease');
    }
  }

  var scrollSliderFull = {
    duration: 1200,
    scale: 1,
    easing: 'ease-in-out',
    distance: '0px',
    mobile: false,
    afterReveal: function(domEl) {
      $(domEl).css('transition', 'all .3s ease');
    }
  }

  if ($('#guests').length) sr.reveal('#guests .guest-main .photo', scrollZoomIn);
  if ($('#plan').length) {
    sr.reveal('#plan .descr', scrollFromLeft, 200);
    sr.reveal('#plan .photo', scrollFromRight, 200);
  }

  if ($('#slider-full').length) {
    sr.reveal('#slider-full h2', scrollFromTop);
    sr.reveal('#slider-full h1', scrollFromLeft2);
  }
}

function checkCountUp() {
  var countBlock = $('#countUp');

  if (countBlock.length) {
    var scrollTop = countBlock.offset().top - window.innerHeight;

    if (!countBlock.data('counted') && $(window).scrollTop() > scrollTop) {
      $(countBlock).find('.number').each(function(i, el) {
        var numAnim = new CountUp($(el).attr('id'), 1, $(el).html());
        numAnim.start();
      });

      countBlock.data('counted', 1);
    }
  }
}

function checkNavbar() {
  var scroll = $(window).scrollTop(),
    navBar = $('nav.navbar'),
    slideDiv = $('.slider-full');

  if (scroll > 1) navBar.addClass('dark');
  else navBar.removeClass('dark');
}

function initMap() {
  var mapEl = $('#map');
  var uluru = {
    lat: mapEl.data('lat'),
    lng: mapEl.data('lng')
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru,
    scrollwheel: false,
    styles: mapStyles
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
