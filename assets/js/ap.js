
///preloader
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-y-hidden");
}, 2500);

//   navbar
let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menuicon");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer")
let bgbody = document.querySelector(".bg-bodys");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
nav.addEventListener("click", function () {
    menubar.classList.toggle("left-0")
    nav.classList.toggle("nav-bg")
    nav.classList.toggle("nav-2")
    span1.classList.toggle("nav1")
    span2.classList.toggle("nav2")
    span3.classList.toggle("nav3")
    document.body.classList.toggle("overflow-hidden")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
})

finish.forEach(e => {
    e.addEventListener("click", function () {
        menubar.classList.remove("left-0")
        span1.classList.toggle("nav1")
        nav.classList.toggle("nav-bg")
        span2.classList.toggle("nav2")
        span3.classList.toggle("nav3")
        bgbody.classList.remove("over-flow")
        overlay.classList.toggle("left-0")
        span2.classList.toggle("nav2")
        span3.classList.toggle("nav3")
        document.body.classList.toggle("overflow-hidden")
    })
});

 // backtotop-button
 document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("back-to-top");

  // Show the button when the user scrolls down 200px from the top
  window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          button.style.display = "block";
      } else {
          button.style.display = "none";
      }
  };

  // Scroll back to the top when the button is clicked
  button.onclick = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  };
})
$('.colab-slick').slick({
  dots: false,
  infinite: true,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'Linear',
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
    breakpoint: 1300,
    settings: {
      slidesToShow: 6,
      autoplay: true,
      speed: 3000,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
      infinite: true,
      dots: false,
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'Linear',
      speed: 1000,
    }
  },
  {
    breakpoint: 650,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
    }
  },
  {
    breakpoint: 580,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
    }
  }
  ]

})





$(".customer-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991.5,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767.5,
        settings: {
          centerPadding: "60px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575.5,
        settings: {
          centerPadding: "10px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

