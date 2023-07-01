$(function () {


  $('.slider_inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [

      {
        breakpoint: 1200,
        settings: {

          slidesToShow: 2,
          slidesToScroll: 2
        }

      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });



});

const RatingList = document.querySelectorAll('.rating_item');
const RatingArray = Array.prototype.slice.call(RatingList);
RatingList.forEach(item =>
  item.addEventListener("click", () =>
    item.parentNode.dataset.totalValue = item.dataset.itemValue
  )
);

var overlay = document.getElementById('overlay');
var vid = document.getElementById('video');

if (overlay.addEventListener) {
  overlay.addEventListener("click", play, false)
} else if (overlay.attachEvent) {
  overlay.attachEvent("onclick", play)
}

function play() {
  if (vid.paused) {
    vid.play();
    vid.setAttribute("controls", "controls");
    overlay.className = "o";
  } else {
    vid.pause();
    overlay.className = "";
  }
}