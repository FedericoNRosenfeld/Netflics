var slideIndex = 0;

window.onload = function() {
  currentSlide(1);
  autoChangeSlides();
};


function plusSlides(n) {
  showSlides(slideIndex += n);
  restartInterval();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
      slideIndex = 1;
    }    
  if (n < 1){
      slideIndex = slides.length;
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// Interval for the Auto-Carousel
var autoCar;

function autoChangeSlides() {
  autoCar = 
    setInterval(
        function(){
          plusSlides(1);
        }, 7000); // Change image every 5 seconds
  }

  function restartInterval() {
    clearInterval(autoCar);
    autoChangeSlides();
  }