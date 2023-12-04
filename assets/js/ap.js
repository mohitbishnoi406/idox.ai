
///preloader
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-y-hidden");
}, 2500);

//   navbar
let label = document.querySelector(".label");
let menu = document.querySelector("#menu");
let aTags = document.querySelectorAll("#menu li a");
let open = 0;

aTags.forEach((c) => {
    c.addEventListener("click", () => {
        if (open != 0) {
            menu.style.right ='-100%'; 
            document.body.classList.remove("overflow-y-hidden");
            label.classList.remove("label-switch");
            open--;
        }
    })
}) 
label.addEventListener("click", () => {
    if (open == 0) {
        menu.style.right = 0;
        document.body.classList.add("overflow-y-hidden");
        label.classList.add("label-switch");
        open++;
    }
    else {
        menu.style.right = '-100%';
        document.body.classList.remove("overflow-y-hidden");
        label.classList.remove("label-switch");
        open--;
    }
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
    centerPadding: "520px",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "300px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
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

