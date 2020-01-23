---
layout: null
sitemap:
  exclude: 'yes'
---

window.onunload = function() {};

$(document).ready(function() {
  $(document).on('click', 'a.blog-button', function(e) {
    if ($(".panel-cover").hasClass("panel-cover--collapsed")) return;
    currentWidth = $(".panel-cover").width();
    if (currentWidth < 960) {
      $(".panel-cover").addClass("panel-cover--collapsed");
      $(".content-wrapper").addClass("animated slideInRight");
    } else {
      $(".panel-cover").css("max-width", currentWidth);
      $(".panel-cover").animate(
        { "max-width": "530px", width: "40%" },
        400,
        (swing = "swing"),
        function() {}
      );
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $(".panel-cover").addClass("panel-cover--collapsed");
  }

  if (
    window.location.pathname !== "{{ site.baseurl }}/" &&
    window.location.pathname !== "{{ site.baseurl }}/index.html"
  ) {
    $(".panel-cover").addClass("panel-cover--collapsed");
  }

  $(".btn-mobile-menu").click(function() {
    $(".navigation-wrapper").toggleClass("visible animated bounceInDown");
    $(".btn-mobile-menu__icon").toggleClass("icon-list icon-x-circle animated fadeIn");
  });

  $(".navigation-wrapper .blog-button").click(function() {
    $(".navigation-wrapper").toggleClass("visible");
    $(".btn-mobile-menu__icon").toggleClass("icon-list icon-x-circle animated fadeIn");
  });

  // https://github.com/TaylanTatli/Moon
  // MIT License
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass(
    "image-popup"
  );
  $(".image-popup").magnificPopup({
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: "mfp-fade"
  });
});
