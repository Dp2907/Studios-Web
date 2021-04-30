window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".header");
  let toTop = document.querySelector("#pushToTop");
  if (window.scrollY > 10) {
    navbarFixed.classList.add("header--sticky");
    toTop.classList.add("visibleButton");
    //hoặc
    //navbarFixed.style.padding = "20px 15px";
  } else {
    navbarFixed.classList.remove("header--sticky");
    toTop.classList.remove("visibleButton");
    //hoặc
    //navbarFixed.style.padding = "25px 15px";
  }
};

$(document).ready(function () {
  $(".owl-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-feedback").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
});

$(".counter").countUp({
  time: 2000,
  delay: 10,
});
